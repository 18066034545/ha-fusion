<!-- 左侧导航组件 -->
<script lang="ts">
  import { dashboard, currentViewId } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  import type { Views } from '$lib/Types';

  let showDeviceTypes = false;
  let deviceTypes = [
    { type: 'lighting', name: '照明控制', icon: 'mdi:ceiling-light' },
    { type: 'ac', name: '空调控制', icon: 'mdi:air-conditioner' },
    { type: 'curtain', name: '窗帘控制', icon: 'mdi:curtains' },
    { type: 'media', name: '媒体控制', icon: 'mdi:television' },
    { type: 'sensor', name: '传感器', icon: 'mdi:thermometer' }
  ];

  function switchView(view: Views) {
    $currentViewId = view.id;
  }

  function switchToDeviceType(type: string) {
    // 过滤并显示特定类型的设备
    const filteredSections = $dashboard.views.flatMap(view => 
      view.sections?.filter(section => section.type === type) || []
    );
    
    // TODO: 实现设备类型视图切换
    console.log('Filtered sections:', filteredSections);
  }
</script>

<div class="navigation">
  <div class="nav-content">
    {#if !showDeviceTypes}
      <!-- 房间列表 -->
      {#each $dashboard.views || [] as view}
        <button 
          class="nav-item"
          class:active={$currentViewId === view.id}
          on:click={() => switchView(view)}
        >
          <Icon icon={view.icon || 'mdi:home'} />
          <span>{view.name}</span>
        </button>
      {/each}
    {:else}
      <!-- 设备类别列表 -->
      {#each deviceTypes as type}
        <button 
          class="nav-item"
          on:click={() => switchToDeviceType(type.type)}
        >
          <Icon icon={type.icon} />
          <span>{type.name}</span>
        </button>
      {/each}
    {/if}
  </div>

  <div class="nav-footer">
    <button 
      class="nav-toggle" 
      on:click={() => showDeviceTypes = !showDeviceTypes}
    >
      <Icon icon={showDeviceTypes ? "mdi:home" : "mdi:apps"} />
      <span>{showDeviceTypes ? "房间" : "设备类别"}</span>
    </button>
  </div>
</div>

<style>
  .navigation {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .nav-content {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
  }

  .nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: none;
    border: none;
    color: white;
    opacity: 0.7;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    text-align: left;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }

  .nav-item.active {
    background: rgba(255, 255, 255, 0.15);
    opacity: 1;
  }

  .nav-footer {
    padding: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: none;
    border: none;
    color: white;
    opacity: 0.7;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
  }

  .nav-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }

  /* 滚动条样式 */
  .nav-content::-webkit-scrollbar {
    width: 4px;
  }

  .nav-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .nav-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }

  .nav-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
</style> 