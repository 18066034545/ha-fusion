import { writable } from 'svelte/store';

// 界面模式
export const interfaceMode = writable<'template' | 'native'>(
  (typeof localStorage !== 'undefined' && localStorage.getItem('ha-fusion-interface') as 'template' | 'native') || 'template'
);

// 其他 store... 