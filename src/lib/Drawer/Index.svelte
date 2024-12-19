<script lang="ts">
	import { dashboard, editMode, motion } from '$lib/Stores';
	import { slide } from 'svelte/transition';
	import EditButton from '$lib/Components/EditButton.svelte';
	import CodeButton from '$lib/Components/CodeButton.svelte';
	import SearchButton from '$lib/Components/SearchButton.svelte';
	import SettingsButton from '$lib/Components/SettingsButton.svelte';
	import InterfaceToggle from './InterfaceToggle.svelte';
	import TemplateButton from './TemplateButton.svelte';

	export let searchValue = '';
</script>

<div id="drawer">
	{#if $dashboard}
		<div class="grid" transition:slide={{ duration: $motion }}>
			<!-- 基础功能区 -->
			<div class="base-controls">
				<EditButton />
				<CodeButton />
				<SearchButton bind:value={searchValue} />
			</div>

			<!-- 模板与界面切换区 -->
			<div class="template-controls">
				<TemplateButton />
				<InterfaceToggle />
			</div>

			<!-- 设置区 -->
			<div class="settings-controls">
				<SettingsButton />
			</div>
		</div>
	{/if}
</div>

<style>
	#drawer {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2;
		padding: 1rem 1.5rem;
		background: linear-gradient(rgba(0, 0, 0, 0.3), transparent);
	}

	.grid {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1rem;
		align-items: center;
	}

	.base-controls,
	.template-controls,
	.settings-controls {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.template-controls {
		justify-content: center;
	}

	.settings-controls {
		justify-content: flex-end;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr auto;
			grid-template-rows: auto auto;
		}

		.template-controls {
			grid-column: 1 / -1;
			justify-content: flex-start;
		}
	}
</style>
