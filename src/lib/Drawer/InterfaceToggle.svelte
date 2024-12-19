<!-- 界面切换组件 -->
<script lang="ts">
  import { interfaceMode } from '$lib/Stores';
  import Icon from '@iconify/svelte';
  import { Ripple } from '$lib/Actions';
  import { ripple } from '$lib/Stores';

  function toggleInterface() {
    $interfaceMode = $interfaceMode === 'template' ? 'native' : 'template';
    // 保存用户偏好
    localStorage.setItem('ha-fusion-interface', $interfaceMode);
  }
</script>

<button 
  class="interface-toggle"
  on:click={toggleInterface}
  title={$interfaceMode === 'template' ? '切换到原生界面' : '切换到模板界面'}
  use:Ripple={$ripple}
>
  <Icon 
    icon={$interfaceMode === 'template' ? 'mdi:view-grid' : 'mdi:view-list'} 
    width="24" 
    height="24" 
  />
  <span class="button-text">
    {$interfaceMode === 'template' ? '模板视图' : '原生视图'}
  </span>
</button>

<style>
  .interface-toggle {
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
  
  .interface-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .button-text {
    font-size: 0.9rem;
  }
</style> 