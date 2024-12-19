<script lang="ts">
  import { openModal } from 'svelte-modals';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  export let disabled = false;

  function handleClick() {
    openModal(() => import('$lib/Modal/Settings.svelte'));
  }
</script>

<button
  class="settings-button"
  on:click={handleClick}
  title="设置"
  use:Ripple={$ripple}
>
  <Icon icon="mdi:cog" width="24" height="24" />
  <span class="button-text">设置</span>
</button>

<style>
  .settings-button {
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
  }

  .settings-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .button-text {
    font-size: 0.9rem;
  }
</style> 