import type { Views } from '$lib/Types';

export interface RoomTemplate {
  id: number;
  name: string;
  icon: string;
  sections: SectionTemplate[];
}

export interface SectionTemplate {
  id: number;
  name: string;
  type: 'lighting' | 'curtain' | 'ac' | 'camera' | 'media' | 'scene' | 'sensor' | 'other';
  icon: string;
  items: any[];
}

export interface HouseTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  rooms: RoomTemplate[];
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