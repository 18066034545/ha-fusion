<!-- 全屏切换按钮组件 -->
<script lang="ts">
  import { motion } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isFullscreen = false;
  
  function toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  }

  function handleFullscreenChange(): void {
    isFullscreen = !!document.fullscreenElement;
  }

  onMount(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  });
</script>

<button
  class="fullscreen-button"
  on:click={toggleFullscreen}
  transition:fade={{ duration: $motion }}
  title={isFullscreen ? "退出全屏" : "进入全屏"}
>
  <Icon 
    icon={isFullscreen ? "mdi:fullscreen-exit" : "mdi:fullscreen"} 
    width="24" 
    height="24"
  />
</button>

<style>
  .fullscreen-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .fullscreen-button:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .fullscreen-button {
      bottom: 10px;
      right: 10px;
    }
  }
</style> 