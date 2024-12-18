<!-- 界面切换组件 -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { motion } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  
  let isCustomInterface = true;
  
  // 从 localStorage 读取界面设置
  onMount(() => {
    const savedInterface = localStorage.getItem('ha-fusion-interface');
    isCustomInterface = savedInterface === null ? true : savedInterface === 'custom';
  });
  
  // 切换界面
  function toggleInterface() {
    isCustomInterface = !isCustomInterface;
    localStorage.setItem('ha-fusion-interface', isCustomInterface ? 'custom' : 'standard');
    
    // 重定向到相应的界面
    const baseUrl = window.location.href.split(':')[0] + ':' + window.location.href.split(':')[1];
    const url = isCustomInterface 
      ? baseUrl + ':5050'
      : baseUrl + ':8123';
      
    window.location.href = url;
  }
</script>

<button
  class="toggle-button"
  on:click={toggleInterface}
  title={isCustomInterface ? "切换到标准界面" : "切换到自定义界面"}
>
  <Icon 
    icon={isCustomInterface ? "mdi:view-dashboard" : "mdi:view-dashboard-outline"} 
    width="24" 
    height="24"
  />
  <span class="button-text">
    {isCustomInterface ? "标准界面" : "自定义界面"}
  </span>
</button>

<style>
  .toggle-button {
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
    width: 100%;
  }
  
  .toggle-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .button-text {
    font-size: 0.9rem;
  }
</style> 