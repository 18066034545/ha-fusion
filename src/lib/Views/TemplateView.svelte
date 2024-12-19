<script lang="ts">
  import { dashboard, showDrawer, motion, editMode } from '$lib/Stores';
  import { slide } from 'svelte/transition';
  import Drawer from '$lib/Drawer/Index.svelte';
  import Sidebar from '$lib/Sidebar/Navigation.svelte';
  import Main from '$lib/Main/Index.svelte';
  import MenuButton from '$lib/Drawer/MenuButton.svelte';
  import FullscreenButton from '$lib/Main/FullscreenButton.svelte';

  export let view = $dashboard?.views?.[0];
  export let altKeyPressed = false;

  function handleClick() {
    if ($editMode) {
      const button = document.querySelector('#editmode') as HTMLButtonElement;
      button?.click();
    } else {
      $showDrawer = !$showDrawer;
    }
  }
</script>

<div
  id="layout"
  style:grid-template-columns="{$dashboard?.hide_sidebar || !$dashboard?.sidebar?.length
    ? '0'
    : $dashboard?.sidebarWidth || 280}px auto"
  style:grid-template-rows={$showDrawer ? 'auto auto 1fr' : '0fr auto 1fr'}
  style:transition="grid-template-rows {$motion}ms ease, grid-template-columns {$motion}ms ease"
>
  <!-- 顶部导航栏 -->
  {#if $showDrawer}
    <div transition:slide={{ duration: $motion }}>
      <Drawer {view} />
    </div>
  {/if}

  <!-- 左侧边栏 -->
  <div class="sidebar">
    <!-- 时间和系统信息 -->
    <div class="time-section">
      <div class="time">{new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</div>
      <div class="date">{new Date().toLocaleDateString('zh-CN', { weekday: 'long' })}</div>
      <div class="date">{new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })}</div>
    </div>

    <!-- 导航菜单 -->
    <Sidebar />
  </div>

  <!-- 主内容区域 -->
  <div class="main-content">
    <Main {view} {altKeyPressed} />
  </div>

  <!-- 菜单按钮 -->
  <MenuButton {handleClick} />

  <!-- 全屏按钮 -->
  <FullscreenButton />
</div>

<style>
  #layout {
    display: grid;
    grid-template-areas:
      'header header header'
      'sidebar main aside';
    grid-template-columns: auto 1fr auto;
    min-height: 100vh;
    overflow: hidden;
  }

  .sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .time-section {
    margin-bottom: 2rem;
  }

  .time {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .date {
    opacity: 0.8;
    margin-bottom: 0.25rem;
  }

  .main-content {
    grid-area: main;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    #layout {
      grid-template-areas:
        'header header header'
        'sidebar sidebar sidebar'
        'main main main';
      grid-template-columns: 1fr;
    }

    .sidebar {
      width: 100%;
      padding: 0.5rem;
    }
  }
</style> 