import type { Views } from '$lib/Types';

interface DefaultTemplate {
  views: Views[];
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
          name: '照明',
          items: []
        },
        {
          id: 102,
          name: '空调',
          items: []
        },
        {
          id: 103,
          name: '电视',
          items: []
        },
        {
          id: 104,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 2,
      name: '主卧',
      icon: 'mdi:bed-double',
      sections: [
        {
          id: 201,
          name: '照明',
          items: []
        },
        {
          id: 202,
          name: '空调',
          items: []
        },
        {
          id: 203,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 3,
      name: '次卧',
      icon: 'mdi:bed',
      sections: [
        {
          id: 301,
          name: '照明',
          items: []
        },
        {
          id: 302,
          name: '空调',
          items: []
        },
        {
          id: 303,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 4,
      name: '儿童房',
      icon: 'mdi:baby',
      sections: [
        {
          id: 401,
          name: '照明',
          items: []
        },
        {
          id: 402,
          name: '空调',
          items: []
        },
        {
          id: 403,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 5,
      name: '厨房',
      icon: 'mdi:stove',
      sections: [
        {
          id: 501,
          name: '照明',
          items: []
        },
        {
          id: 502,
          name: '电器',
          items: []
        },
        {
          id: 503,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 6,
      name: '卫生间',
      icon: 'mdi:shower',
      sections: [
        {
          id: 601,
          name: '照明',
          items: []
        },
        {
          id: 602,
          name: '热水器',
          items: []
        },
        {
          id: 603,
          name: '其他',
          items: []
        }
      ]
    },
    {
      id: 7,
      name: '阳台',
      icon: 'mdi:window-open',
      sections: [
        {
          id: 701,
          name: '照明',
          items: []
        },
        {
          id: 702,
          name: '其他',
          items: []
        }
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