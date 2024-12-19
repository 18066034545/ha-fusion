<script lang="ts">
  import { closeModal } from "svelte-modals";
  import { ripple } from "$lib/Stores";
  import { Ripple } from "$lib/Actions";
</script>

<div class="modal">
  <div class="modal-content">
    <h2>设置</h2>
    <div class="settings-container">
      <div class="setting-item">
        <label>
          启用涟漪效果
          <input type="checkbox" bind:checked={$ripple} />
        </label>
      </div>
    </div>
    <div class="modal-footer">
      <button use:Ripple on:click={closeModal}>关闭</button>
    </div>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: var(--card-background-color);
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
  }

  h2 {
    margin: 0 0 20px 0;
    color: var(--primary-text-color);
  }

  .settings-container {
    margin-bottom: 20px;
  }

  .setting-item {
    margin-bottom: 10px;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-text-color);
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }
</style> 