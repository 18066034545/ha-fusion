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
	import { interfaceMode } from '$lib/Stores';
	import TemplateView from '$lib/Views/TemplateView.svelte';
	import NativeView from '$lib/Views/NativeView.svelte';

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

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<!-- theme -->
<Theme initial={data?.theme} />

{#if mounted}
	{#if $interfaceMode === 'template'}
		<TemplateView />
	{:else}
		<NativeView />
	{/if}
{/if}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
