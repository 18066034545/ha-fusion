<script lang="ts">
	import { lang, ripple } from '$lib/Stores';
	import { openModal } from 'svelte-modals';
	import Icon from '@iconify/svelte';
	import Ripple from 'svelte-ripple';
	import { base } from '$app/paths';
	import Separator from './Separator.svelte';

	export let data: any;

	let languages: {
		id: string;
		label: string;
	}[];

	/**
	 * Gets languages and opens modal
	 */
	async function handleClick() {
		const getIntlName = (code: string, displayLanguage = code) => {
			const name = new Intl.DisplayNames([displayLanguage], { type: 'language' }).of(code);
			return (name || code).charAt(0).toUpperCase() + (name || code).slice(1);
		};
		try {
			const response = await fetch(`${base}/_api/list_languages`);
			const data = await response.json();
			if (response.ok) {
				languages = data.map((code: string) => ({
					id: code,
					label: getIntlName(code)
				}));
			} else {
				throw new Error(`${response.status}, ${data.message}`);
			}
		} catch (error) {
			console.error(error);
		}
		openModal(() => import('$lib/Settings/Index.svelte'), { data, languages });
	}

	/**
	 * Opens template selector modal
	 */
	function openTemplateSelector() {
		openModal(() => import('$lib/Modal/TemplateSelector.svelte'));
	}

	/**
	 * Preloads module before click event
	 */
	async function handlePointer() {
		await import('$lib/Settings/Index.svelte');
	}
</script>

<div class="settings-container">
	<button
		class="button"
		on:click={handleClick}
		on:pointerenter={handlePointer}
		on:pointerdown={handlePointer}
		use:Ripple={$ripple}
	>
		<figure>
			<Icon icon="clarity:settings-solid" height="none" />
		</figure>

		<span>{$lang('settings')}</span>
	</button>

	<button
		class="button"
		on:click={openTemplateSelector}
		use:Ripple={$ripple}
	>
		<figure>
			<Icon icon="mdi:home-variant" height="none" />
		</figure>

		<span>应用模板</span>
	</button>

	<Separator />

	{#await import('./InterfaceToggle.svelte') then InterfaceToggle}
		<svelte:component this={InterfaceToggle.default} />
	{/await}
</div>

<style>
	.settings-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 0.25rem;
		transition: all 0.3s ease;
		width: 100%;
	}

	.button:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	figure {
		display: flex;
		margin: 0;
	}
</style>
