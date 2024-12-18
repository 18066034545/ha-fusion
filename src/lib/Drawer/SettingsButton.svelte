<script lang="ts">
	import { lang, ripple } from '$lib/Stores';
	import { openModal } from 'svelte-modals';
	import Icon from '@iconify/svelte';
	import Ripple from 'svelte-ripple';
	import { base } from '$app/paths';

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

	/**
	 * 跳转到标准界面
	 */
	function goToStandardInterface() {
		const currentUrl = window.location.href;
		const baseUrl = currentUrl.split(':5050')[0];
		window.location.href = `${baseUrl}:8123`;
	}
</script>

<div class="settings-container">
	<div class="settings-group">
		<button
			class="button"
			on:click={handleClick}
			on:pointerenter={handlePointer}
			on:pointerdown={handlePointer}
			use:Ripple={$ripple}
		>
			<figure>
				<Icon icon="clarity:settings-solid" height="24" />
			</figure>
			<span>{$lang('settings')}</span>
		</button>

		<button
			class="button"
			on:click={openTemplateSelector}
			use:Ripple={$ripple}
		>
			<figure>
				<Icon icon="mdi:home-variant" height="24" />
			</figure>
			<span>应用模板</span>
		</button>

		<button
			class="button"
			on:click={goToStandardInterface}
			use:Ripple={$ripple}
		>
			<figure>
				<Icon icon="mdi:view-dashboard" height="24" />
			</figure>
			<span>标准界面</span>
		</button>
	</div>
</div>

<style>
	.settings-container {
		padding: 0.5rem;
	}

	.settings-group {
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
		text-align: left;
	}

	.button:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	figure {
		display: flex;
		margin: 0;
	}

	@media (max-width: 768px) {
		.settings-container {
			padding: 0.25rem;
		}
	}
</style>
