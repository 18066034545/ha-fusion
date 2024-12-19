<script lang="ts">
  import { editMode } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  function toggleEdit() {
    $editMode = !$editMode;
  }
</script>

<button
  id="editmode"
  class="edit-button"
  on:click={toggleEdit}
  title={$editMode ? '退出编辑' : '进入编辑'}
  use:Ripple={$ripple}
>
  <Icon
    icon={$editMode ? 'mdi:pencil-off' : 'mdi:pencil'}
    width="24"
    height="24"
  />
  <span class="button-text">
    {$editMode ? '退出编辑' : '编辑'}
  </span>
</button>

<style>
  .edit-button {
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

  .edit-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .button-text {
    font-size: 0.9rem;
  }
</style> 