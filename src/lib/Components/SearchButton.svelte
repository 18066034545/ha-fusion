<script lang="ts">
  import { drawerSearch, focusSearch } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  export let value = '';

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    $drawerSearch = target.value;
  }

  function handleFocus() {
    $focusSearch = true;
  }

  function handleBlur() {
    $focusSearch = false;
  }
</script>

<div class="search-container">
  <Icon icon="mdi:magnify" width="24" height="24" />
  <input
    type="text"
    placeholder="搜索..."
    bind:value
    on:input={handleInput}
    on:focus={handleFocus}
    on:blur={handleBlur}
    use:Ripple={$ripple}
  />
</div>

<style>
  .search-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
  }

  .search-container:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  input {
    background: none;
    border: none;
    color: white;
    font-size: 0.9rem;
    width: 150px;
    outline: none;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    input {
      width: 100px;
    }
  }
</style> 