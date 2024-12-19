<script lang="ts">
  import { onMount } from 'svelte';
  import { configuration } from '$lib/Stores';

  let iframe: HTMLIFrameElement;
  
  onMount(() => {
    if ($configuration?.url) {
      iframe.src = $configuration.url;
    }
  });
</script>

<div class="native-view">
  <iframe
    bind:this={iframe}
    title="Home Assistant"
    allow="fullscreen"
    sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-modals"
  />
</div>

<style>
  .native-view {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style> 