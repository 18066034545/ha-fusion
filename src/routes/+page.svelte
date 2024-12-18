<script lang="ts">
	import {
		dashboard,
		configuration,
		editMode,
		motion,
		showDrawer,
		translation,
		drawerSearch,
		focusSearch,
		currentViewId,
		selectedLanguage,
		customJs,
		filterDashboard,
		disableMenuButton,
		clickOriginatedFromMenu,
		connection,
		youtubeAddon
	} from '$lib/Stores';
	import { authentication } from '$lib/Socket';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { modals } from 'svelte-modals';
	import Theme from '$lib/Components/Theme.svelte';

	/**
	 * Data from server-side load
	 * function +page.server.ts
	 */
	export let data;

	let altKeyPressed = false;

	$configuration = data?.configuration;
	$dashboard = data?.dashboard;
	$translation = data?.translations;
	$selectedLanguage = data?.configuration?.locale || 'en';
	$customJs = data?.configuration?.custom_js;
	$youtubeAddon = data?.configuration?.addons?.youtube;
	$currentViewId = $dashboard?.views?.[0]?.id;

	const _motion = data?.configuration?.motion;
	$motion = _motion === undefined || _motion === true ? $motion : 0;

	/**
	 * Computes the current view.
	 *
	 * filterDashboard is filtered from search input, else
	 * find `$currentViewId` OR when dragging get `isDndShadowItem`
	 */
	$: view = $drawerSearch
		? $filterDashboard
		: $dashboard?.views?.find((view) => view?.id === $currentViewId) ||
			$dashboard?.views?.find((view) => view?.isDndShadowItem);

	/**
	 * WebSocket, tries to reconnect if no previous connection has been made.
	 */
	let isConnecting = false;
	let retryInterval: ReturnType<typeof setInterval>;

	if (browser) {
		document.documentElement.lang = $selectedLanguage || 'en';

		connect();
		retryInterval = setInterval(connect, 3000);
	}

	async function connect() {
		if (isConnecting) return;
		isConnecting = true;

		console.debug('authenticating...');

		try {
			await authentication($configuration);
			console.debug('authenticated.');
			clearInterval(retryInterval);
		} catch {
			// catch but don't log
		} finally {
			isConnecting = false;
		}
	}

	/**
	 * Reconnect if long-lived access token changes
	 */
	$: if ($configuration?.token) updateConnection();

	function updateConnection() {
		if (isConnecting || !browser) return;
		clearInterval(retryInterval);

		connect();
		retryInterval = setInterval(connect, 3000);
	}

	onDestroy(() => clearInterval(retryInterval));

	onMount(async () => {
		/**
		 * If the "menu" parameter in the URL is set to 'false'
		 * Menu button is hidden and drawer is disabled.
		 */
		const menuParam = new URLSearchParams(window.location.search).get('menu');
		$disableMenuButton = menuParam === 'false';

		/**
		 * Unregister service worker because it
		 * interferes with MJPEG camera streams
		 */
		if ('serviceWorker' in navigator) {
			try {
				const registrations = await navigator.serviceWorker.getRegistrations();
				for (const registration of registrations) {
					await registration.unregister();
				}
			} catch (error) {
				console.error('Error during service worker unregistration:', error);
			}
		}
	});

	/**
	 * Toggles drawer visibility and resets
	 * the `$clickOriginatedFromMenu` flag.
	 */
	function toggleDrawer() {
		$showDrawer = !$showDrawer;
		$clickOriginatedFromMenu = false;
	}

	/**
	 * If in edit mode, toggle editMode by programmatically clicking `EditModeButton`
	 * to trigger any potential confirm dialogs. Else toggle drawer normally.
	 */
	function handleClick() {
		if ($editMode) {
			$clickOriginatedFromMenu = true;
			const button = document.querySelector('#editmode') as HTMLButtonElement;
			button?.click();
		} else {
			toggleDrawer();
		}
	}

	/**
	 * Handles the keydown events for:
	 * - 'Escape': Hides the search focus/hides the drawer.
	 * - 'Alt': Copy item on drag-and-drop
	 * - 'f': Shows drawer and/or focuses on the search field.
	 */
	function handleKeydown(event: KeyboardEvent) {
		if ($modals.length) return;

		// don't focus on underlying element
		if (event.key === 'Escape' && !$editMode && document.activeElement) {
			(document.activeElement as HTMLElement).blur();
		}

		if (event.key === 'Alt') {
			altKeyPressed = true;
		}

		if (event.key === 'f' && !$disableMenuButton) {
			if (!$showDrawer || !$focusSearch) {
				$focusSearch = true;
				if (!$showDrawer) $showDrawer = true;
				event.preventDefault(); // prevent 'f'
			}
		} else if (event.key === 'Escape' && $showDrawer && !$editMode) {
			$focusSearch = false;
			if (!$drawerSearch) handleClick();
			$drawerSearch = undefined;
		}
	}

	/**
	 * Handle Alt key press and release events for copy-on-drag
	 */
	function handleKeyup(event: KeyboardEvent) {
		if (event.key === 'Alt') {
			altKeyPressed = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<!-- theme -->
<Theme initial={data?.theme} />

<div
	id="layout"
	style:grid-template-columns="{$dashboard?.hide_sidebar || !$dashboard?.sidebar?.length
		? '0'
		: $dashboard?.sidebarWidth || 350}px auto"
	style:grid-template-rows={$showDrawer ? 'auto auto 1fr' : '0fr auto 1fr'}
	style:transition="grid-template-rows {$motion}ms ease, grid-template-columns {$motion}ms ease"
>
	<!-- header -->
	{#if $showDrawer}
		{#await import('$lib/Drawer/Index.svelte') then Drawer}
			<svelte:component this={Drawer.default} {view} {data} {toggleDrawer} />
		{/await}
	{/if}

	<!-- sidebar -->
	<div class="sidebar">
		<!-- time and system info -->
		<div class="time-section">
			<div class="time">23:45</div>
			<div class="date">星期三</div>
			<div class="date">12月18日</div>
			<div class="version">Vecka 51</div>
		</div>

		<!-- weather and stats -->
		<div class="stats-section">
			<div class="weather">Weather</div>
			<div class="cpu">CPU: 0%</div>
			<div class="ram">RAM: 0%</div>
		</div>

		<!-- navigation -->
		{#await import('$lib/Sidebar/Navigation.svelte') then Navigation}
			<svelte:component this={Navigation.default} />
		{/await}
	</div>

	<!-- main content -->
	<div class="main-content">
		{#if view?.sections}
			{#await import('$lib/Main/Index.svelte') then Main}
				<svelte:component this={Main.default} {view} {altKeyPressed} />
			{/await}
		{:else if $connection}
			{#await import('$lib/Main/Intro.svelte') then Intro}
				<svelte:component this={Intro.default} {data} />
			{/await}
		{/if}
	</div>

	<!-- right sidebar -->
	{#await import('$lib/Sidebar/Index.svelte') then Sidebar}
		<svelte:component this={Sidebar.default} {altKeyPressed} />
	{/await}

	<!-- menu -->
	{#if !$disableMenuButton}
		{#await import('$lib/Drawer/MenuButton.svelte') then MenuButton}
			<svelte:component this={MenuButton.default} {handleClick} />
		{/await}
	{/if}

	<!-- fullscreen button -->
	{#await import('$lib/Main/FullscreenButton.svelte') then FullscreenButton}
		<svelte:component this={FullscreenButton.default} />
	{/await}
</div>

<style>
	#layout {
		display: grid;
		grid-template-areas:
			'header header header'
			'sidebar main aside';
		grid-template-columns: auto 1fr auto;
		min-height: 100vh;
		overflow: hidden;
	}

	.sidebar {
		grid-area: sidebar;
		display: flex;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.2);
		width: 280px;
	}

	.time-section {
		padding: 1rem;
	}

	.time {
		font-size: 2rem;
		font-weight: bold;
	}

	.date, .version {
		opacity: 0.8;
	}

	.stats-section {
		padding: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.main-content {
		grid-area: main;
	}

	@media (max-width: 768px) {
		#layout {
			grid-template-areas:
				'header header header'
				'sidebar sidebar sidebar'
				'main main main';
			grid-template-columns: 1fr;
		}

		.sidebar {
			width: 100%;
		}
	}
</style>
