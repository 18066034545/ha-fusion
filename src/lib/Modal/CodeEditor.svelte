<script lang="ts">
  import { closeModal } from 'svelte-modals';
  import Icon from '@iconify/svelte';
  import { dashboard, record } from '$lib/Stores';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  let code = JSON.stringify($dashboard, null, 2);
  let error = '';

  function handleSave() {
    try {
      const parsed = JSON.parse(code);
      $dashboard = parsed;
      $record();
      closeModal();
    } catch (e) {
      error = e.message;
    }
  }
</script>

<div class="code-editor">
  <h2>编辑配置</h2>
  
  <div class="editor">
    <textarea
      bind:value={code}
      spellcheck="false"
      placeholder="在此编辑配置..."
    />
  </div>

  {#if error}
    <div class="error">
      <Icon icon="mdi:alert" />
      <span>{error}</span>
    </div>
  {/if}

  <div class="actions">
    <button class="cancel" on:click={closeModal} use:Ripple={$ripple}>
      取消
    </button>
    <button class="save" on:click={handleSave} use:Ripple={$ripple}>
      保存
    </button>
  </div>
</div>

<style>
  .code-editor {
    padding: 1.5rem;
    color: white;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .editor {
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    color: white;
    font-family: monospace;
    font-size: 0.9rem;
    resize: vertical;
  }

  .error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 87, 87, 0.2);
    color: #ff5757;
    padding: 0.8rem;
    border-radius: 0.4rem;
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .cancel {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  .save {
    background: #4CAF50;
    color: white;
  }

  button:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
</style> 