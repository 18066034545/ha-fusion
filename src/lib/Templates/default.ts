import type { Views } from '$lib/Types';

interface DefaultTemplate {
  views: Views[];
  sidebar: {
    type: string;
    items: { name: string; icon: string }[];
  }[];
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    }
  };
  settings: {
    sidebarWidth: number;
    motion: boolean;
    hide_views: boolean;
    hide_sidebar: boolean;
  };
}

export const defaultTemplate: DefaultTemplate = {
  views: [
    {
      id: 1,
      name: '客厅',
      icon: 'mdi:sofa',
      sections: [
        {
          id: 101,
          name: '照明控制',
          icon: 'mdi:ceiling-light',
          type: 'lighting',
          items: []
        },
        {
          id: 102,
          name: '空调控制',
          icon: 'mdi:air-conditioner',
          type: 'ac',
          items: []
        },
        {
          id: 103,
          name: '电视控制',
          icon: 'mdi:television',
          type: 'media',
          items: []
        },
        {
          id: 104,
          name: '窗帘控制',
          icon: 'mdi:curtains',
          type: 'curtain',
          items: []
        },
        {
          id: 105,
          name: '传感器',
          icon: 'mdi:thermometer',
          type: 'sensor',
          items: []
        }
      ]
    },
    {
      id: 2,
      name: '主卧室',
      icon: 'mdi:bed-double',
      sections: [
        {
          id: 201,
          name: '照明控制',
          icon: 'mdi:ceiling-light',
          type: 'lighting',
          items: []
        },
        {
          id: 202,
          name: '空调控制',
          icon: 'mdi:air-conditioner',
          type: 'ac',
          items: []
        },
        {
          id: 203,
          name: '窗帘控制',
          icon: 'mdi:curtains',
          type: 'curtain',
          items: []
        },
        {
          id: 204,
          name: '传感器',
          icon: 'mdi:thermometer',
          type: 'sensor',
          items: []
        }
      ]
    }
  ],
  sidebar: [
    {
      type: 'navigation',
      items: [
        { name: '房间导航', icon: 'mdi:home' },
        { name: '设备类别', icon: 'mdi:apps' }
      ]
    }
  ],
  theme: {
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      background: 'linear-gradient(135deg, #654ea3 0%, #da98b4 100%)',
      text: '#FFFFFF'
    }
  },
  settings: {
    sidebarWidth: 280,
    motion: true,
    hide_views: false,
    hide_sidebar: false
  }
}; 