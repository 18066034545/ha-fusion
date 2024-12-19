import { writable } from 'svelte/store';

// 界面模式
const interfaceMode = writable<'template' | 'native'>(
  (typeof localStorage !== 'undefined' && localStorage.getItem('ha-fusion-interface') as 'template' | 'native') || 'template'
);

// 涟漪效果
const ripple = writable<boolean>(
  (typeof localStorage !== 'undefined' && localStorage.getItem('ha-fusion-ripple') === 'true') || true
);

export { interfaceMode, ripple };

// 其他 store... 