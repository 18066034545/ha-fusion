import type { HouseTemplate, SectionTemplate } from './types';

const commonSections: Record<string, Omit<SectionTemplate, 'id'>> = {
  lighting: {
    type: 'lighting' as const,
    name: '照明',
    icon: 'mdi:ceiling-light',
    items: []
  },
  curtain: {
    type: 'curtain' as const,
    name: '窗帘',
    icon: 'mdi:curtains',
    items: []
  },
  ac: {
    type: 'ac' as const,
    name: '空调',
    icon: 'mdi:air-conditioner',
    items: []
  },
  camera: {
    type: 'camera' as const,
    name: '监控',
    icon: 'mdi:cctv',
    items: []
  },
  media: {
    type: 'media' as const,
    name: '音乐',
    icon: 'mdi:music',
    items: []
  },
  scene: {
    type: 'scene' as const,
    name: '场景',
    icon: 'mdi:movie-edit',
    items: []
  },
  sensor: {
    type: 'sensor' as const,
    name: '传感器',
    icon: 'mdi:motion-sensor',
    items: []
  },
  other: {
    type: 'other' as const,
    name: '其他',
    icon: 'mdi:dots-horizontal',
    items: []
  }
};

const commonTheme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: 'linear-gradient(135deg, #654ea3 0%, #da98b4 100%)',
    text: '#FFFFFF'
  }
};

const commonSettings = {
  sidebarWidth: 280,
  motion: true,
  hide_views: false,
  hide_sidebar: false
};

export const houseTemplates: HouseTemplate[] = [
  {
    id: 'apartment-2b1b',
    name: '两室一厅',
    description: '适合小家庭的两室一厅户型，包含客厅、主卧、次卧等基础空间',
    preview: '/templates/2b1b.png',
    rooms: [
      {
        id: 1,
        name: '客厅',
        icon: 'mdi:sofa',
        sections: [
          { ...commonSections.lighting, id: 101 },
          { ...commonSections.curtain, id: 102 },
          { ...commonSections.ac, id: 103 },
          { ...commonSections.media, id: 104 },
          { ...commonSections.scene, id: 105 },
          { ...commonSections.sensor, id: 106 }
        ]
      },
      {
        id: 2,
        name: '主卧',
        icon: 'mdi:bed-double',
        sections: [
          { ...commonSections.lighting, id: 201 },
          { ...commonSections.curtain, id: 202 },
          { ...commonSections.ac, id: 203 },
          { ...commonSections.scene, id: 204 },
          { ...commonSections.sensor, id: 205 }
        ]
      },
      {
        id: 3,
        name: '次卧',
        icon: 'mdi:bed',
        sections: [
          { ...commonSections.lighting, id: 301 },
          { ...commonSections.curtain, id: 302 },
          { ...commonSections.ac, id: 303 },
          { ...commonSections.scene, id: 304 },
          { ...commonSections.sensor, id: 305 }
        ]
      },
      {
        id: 4,
        name: '厨房',
        icon: 'mdi:stove',
        sections: [
          { ...commonSections.lighting, id: 401 },
          { ...commonSections.sensor, id: 402 }
        ]
      },
      {
        id: 5,
        name: '卫生间',
        icon: 'mdi:shower',
        sections: [
          { ...commonSections.lighting, id: 501 },
          { ...commonSections.sensor, id: 502 }
        ]
      }
    ],
    theme: commonTheme,
    settings: commonSettings
  },
  {
    id: 'apartment-3b2b',
    name: '三室两厅',
    description: '适合中等家庭的三室两厅户型，带有书房空间',
    preview: '/templates/3b2b.png',
    rooms: [
      {
        id: 1,
        name: '客厅',
        icon: 'mdi:sofa',
        sections: [
          { ...commonSections.lighting, id: 101 },
          { ...commonSections.curtain, id: 102 },
          { ...commonSections.ac, id: 103 },
          { ...commonSections.media, id: 104 },
          { ...commonSections.scene, id: 105 },
          { ...commonSections.sensor, id: 106 },
          { ...commonSections.camera, id: 107 }
        ]
      },
      {
        id: 2,
        name: '主卧',
        icon: 'mdi:bed-double',
        sections: [
          { ...commonSections.lighting, id: 201 },
          { ...commonSections.curtain, id: 202 },
          { ...commonSections.ac, id: 203 },
          { ...commonSections.scene, id: 204 },
          { ...commonSections.sensor, id: 205 }
        ]
      },
      {
        id: 3,
        name: '次卧',
        icon: 'mdi:bed',
        sections: [
          { ...commonSections.lighting, id: 301 },
          { ...commonSections.curtain, id: 302 },
          { ...commonSections.ac, id: 303 },
          { ...commonSections.scene, id: 304 },
          { ...commonSections.sensor, id: 305 }
        ]
      },
      {
        id: 4,
        name: '书房',
        icon: 'mdi:book',
        sections: [
          { ...commonSections.lighting, id: 401 },
          { ...commonSections.curtain, id: 402 },
          { ...commonSections.ac, id: 403 },
          { ...commonSections.sensor, id: 404 }
        ]
      },
      {
        id: 5,
        name: '餐厅',
        icon: 'mdi:silverware-fork-knife',
        sections: [
          { ...commonSections.lighting, id: 501 },
          { ...commonSections.curtain, id: 502 },
          { ...commonSections.scene, id: 503 },
          { ...commonSections.sensor, id: 504 }
        ]
      },
      {
        id: 6,
        name: '厨房',
        icon: 'mdi:stove',
        sections: [
          { ...commonSections.lighting, id: 601 },
          { ...commonSections.sensor, id: 602 },
          { ...commonSections.camera, id: 603 }
        ]
      },
      {
        id: 7,
        name: '主卫',
        icon: 'mdi:shower',
        sections: [
          { ...commonSections.lighting, id: 701 },
          { ...commonSections.sensor, id: 702 }
        ]
      },
      {
        id: 8,
        name: '次卫',
        icon: 'mdi:toilet',
        sections: [
          { ...commonSections.lighting, id: 801 },
          { ...commonSections.sensor, id: 802 }
        ]
      }
    ],
    theme: commonTheme,
    settings: commonSettings
  },
  {
    id: 'villa',
    name: '别墅',
    description: '适合大户型的多层别墅，包含更多娱乐和功能空间',
    preview: '/templates/villa.png',
    rooms: [
      {
        id: 1,
        name: '客厅',
        icon: 'mdi:sofa',
        sections: [
          { ...commonSections.lighting, id: 101 },
          { ...commonSections.curtain, id: 102 },
          { ...commonSections.ac, id: 103 },
          { ...commonSections.media, id: 104 },
          { ...commonSections.scene, id: 105 },
          { ...commonSections.sensor, id: 106 },
          { ...commonSections.camera, id: 107 }
        ]
      },
      {
        id: 2,
        name: '主卧',
        icon: 'mdi:bed-double',
        sections: [
          { ...commonSections.lighting, id: 201 },
          { ...commonSections.curtain, id: 202 },
          { ...commonSections.ac, id: 203 },
          { ...commonSections.scene, id: 204 },
          { ...commonSections.sensor, id: 205 },
          { ...commonSections.media, id: 206 }
        ]
      },
      {
        id: 3,
        name: '次卧1',
        icon: 'mdi:bed',
        sections: [
          { ...commonSections.lighting, id: 301 },
          { ...commonSections.curtain, id: 302 },
          { ...commonSections.ac, id: 303 },
          { ...commonSections.scene, id: 304 },
          { ...commonSections.sensor, id: 305 }
        ]
      },
      {
        id: 4,
        name: '次卧2',
        icon: 'mdi:bed',
        sections: [
          { ...commonSections.lighting, id: 401 },
          { ...commonSections.curtain, id: 402 },
          { ...commonSections.ac, id: 403 },
          { ...commonSections.scene, id: 404 },
          { ...commonSections.sensor, id: 405 }
        ]
      },
      {
        id: 5,
        name: '书房',
        icon: 'mdi:book',
        sections: [
          { ...commonSections.lighting, id: 501 },
          { ...commonSections.curtain, id: 502 },
          { ...commonSections.ac, id: 503 },
          { ...commonSections.sensor, id: 504 }
        ]
      },
      {
        id: 6,
        name: '影音室',
        icon: 'mdi:movie',
        sections: [
          { ...commonSections.lighting, id: 601 },
          { ...commonSections.curtain, id: 602 },
          { ...commonSections.ac, id: 603 },
          { ...commonSections.media, id: 604 },
          { ...commonSections.scene, id: 605 },
          { ...commonSections.sensor, id: 606 }
        ]
      },
      {
        id: 7,
        name: '餐厅',
        icon: 'mdi:silverware-fork-knife',
        sections: [
          { ...commonSections.lighting, id: 701 },
          { ...commonSections.curtain, id: 702 },
          { ...commonSections.scene, id: 703 },
          { ...commonSections.sensor, id: 704 },
          { ...commonSections.media, id: 705 }
        ]
      },
      {
        id: 8,
        name: '厨房',
        icon: 'mdi:stove',
        sections: [
          { ...commonSections.lighting, id: 801 },
          { ...commonSections.sensor, id: 802 },
          { ...commonSections.camera, id: 803 }
        ]
      },
      {
        id: 9,
        name: '健身房',
        icon: 'mdi:dumbbell',
        sections: [
          { ...commonSections.lighting, id: 901 },
          { ...commonSections.ac, id: 902 },
          { ...commonSections.media, id: 903 },
          { ...commonSections.sensor, id: 904 }
        ]
      },
      {
        id: 10,
        name: '花园',
        icon: 'mdi:flower',
        sections: [
          { ...commonSections.lighting, id: 1001 },
          { ...commonSections.sensor, id: 1002 },
          { ...commonSections.camera, id: 1003 }
        ]
      }
    ],
    theme: commonTheme,
    settings: commonSettings
  }
]; 