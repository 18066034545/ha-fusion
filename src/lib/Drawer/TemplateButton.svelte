<script lang="ts">
  import { openModal } from '$lib/Modal';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';
  
  async function openTemplateSelector() {
    const TemplateSelector = (await import('$lib/Modal/TemplateSelector.svelte')).default;
    openModal(TemplateSelector);
  }
</script>

<button 
  class="template-button"
  on:click={openTemplateSelector}
  title="选择户型模板"
  use:Ripple={$ripple}
>
  <Icon icon="mdi:home-variant" width="24" height="24" />
  <span class="button-text">户型模板</span>
</button>

<style>
  .template-button {
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
  
  .template-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .button-text {
    font-size: 0.9rem;
  }
</style> 