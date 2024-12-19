<script lang="ts">
  import { openModal } from 'svelte-modals';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  export let disabled = false;

  function handleClick() {
    openModal(() => import('$lib/Modal/CodeEditor.svelte'));
  }
</script>

<button
  class="code-button"
  on:click={handleClick}
  title="编辑代码"
  use:Ripple={$ripple}
>
  <Icon icon="mdi:code-braces" width="24" height="24" />
  <span class="button-text">代码</span>
</button>

<style>
  .code-button {
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

  .code-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .button-text {
    font-size: 0.9rem;
  }
</style> 