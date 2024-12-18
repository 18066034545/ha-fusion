<!-- 模板选择组件 -->
<script lang="ts">
  import { houseTemplates } from '$lib/Templates/houses';
  import { dashboard, record } from '$lib/Stores';
  import { closeModal } from 'svelte-modals';
  import Icon from '@iconify/svelte';
  import type { Dashboard } from '$lib/Types';
  import type { HouseTemplate } from '$lib/Templates/types';

  let selectedTemplate: HouseTemplate | null = null;
  let showConfirm = false;

  function selectTemplate(template: HouseTemplate): void {
    selectedTemplate = template;
    showConfirm = true;
  }

  function handleKeyDown(e: KeyboardEvent, template: HouseTemplate): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectTemplate(template);
    }
  }

  function applyTemplate(): void {
    if (!selectedTemplate) return;

    // 保存当前配置
    const currentConfig = JSON.stringify($dashboard);
    localStorage.setItem('ha-fusion-backup', currentConfig);

    // 应用模板
    const updatedDashboard: Dashboard = {
      ...$dashboard,
      views: selectedTemplate.rooms.map(room => ({
        id: room.id,
        name: room.name,
        icon: room.icon,
        sections: room.sections.map(section => ({
          id: section.id,
          name: section.name,
          icon: section.icon,
          type: section.type,
          items: []
        }))
      })),
      theme: selectedTemplate.theme,
      hide_views: selectedTemplate.settings.hide_views,
      hide_sidebar: selectedTemplate.settings.hide_sidebar,
      sidebarWidth: selectedTemplate.settings.sidebarWidth
    };

    // 更新状态
    $dashboard = updatedDashboard;
    
    // 记录更改
    $record();
    
    // 关闭模态框
    closeModal();
    
    // 强制重新渲染
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  function cancelConfirm(): void {
    showConfirm = false;
    selectedTemplate = null;
  }
</script>

<div class="template-selector">
  {#if !showConfirm}
    <h2>选择户型模板</h2>
    
    <p class="description">
      选择一个预设的户型模板，快速配置您的智能家居空间。所有模板都包含照明、窗帘、空调等常用控制。
    </p>

    <div class="templates">
      {#each houseTemplates as template (template.id)}
        <div 
          class="template-card"
          on:click={() => selectTemplate(template)}
          on:keydown={(e) => handleKeyDown(e, template)}
          role="button"
          tabindex="0"
        >
          <div class="template-preview">
            <img src={template.preview} alt={template.name} />
          </div>
          <div class="template-info">
            <h3>{template.name}</h3>
            <p>{template.description}</p>
          </div>
          <div class="template-rooms">
            {#each template.rooms.slice(0, 4) as room}
              <div class="room-icon">
                <Icon icon={room.icon} width="20" height="20" />
              </div>
            {/each}
            {#if template.rooms.length > 4}
              <div class="room-more">+{template.rooms.length - 4}</div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <h2>确认应用模板</h2>
    
    <p class="description">
      您即将应用"{selectedTemplate?.name}"模板。此操作将覆盖当前配置，但会自动备份现有设置。
    </p>

    <div class="preview">
      <div class="rooms">
        {#each selectedTemplate?.rooms || [] as room}
          <div class="room">
            <div class="room-header">
              <Icon icon={room.icon} width="24" height="24" />
              <span>{room.name}</span>
            </div>
            <div class="room-sections">
              {#each room.sections as section}
                <div class="section">
                  <Icon icon={section.icon} width="16" height="16" />
                  <span>{section.name}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="actions">
      <button class="cancel" on:click={cancelConfirm}>
        返回选择
      </button>
      <button class="apply" on:click={applyTemplate}>
        确认应用
      </button>
    </div>
  {/if}
</div>

<style>
  .template-selector {
    padding: 1.5rem;
    color: white;
    max-height: 80vh;
    overflow-y: auto;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .description {
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .templates {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  .template-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .template-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  .template-preview {
    width: 100%;
    height: 160px;
    border-radius: 0.25rem;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .template-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .template-info h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  .template-info p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9rem;
  }

  .template-rooms {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .room-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .room-more {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .preview {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .rooms {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .room {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    padding: 1rem;
  }

  .room-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .room-sections {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .section {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
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

  .apply {
    background: #4CAF50;
    color: white;
  }

  button:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }

  /* 滚动条样式 */
  .template-selector::-webkit-scrollbar {
    width: 8px;
  }

  .template-selector::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .template-selector::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  .template-selector::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
</style> 