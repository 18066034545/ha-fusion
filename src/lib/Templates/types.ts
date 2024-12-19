import type { Theme } from '$lib/Types';

export interface HouseTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  rooms: Room[];
  theme: Theme;
  settings: Settings;
}

export interface Room {
  id: number;
  name: string;
  icon: string;
  sections: SectionTemplate[];
}

export interface SectionTemplate {
  id: number;
  name: string;
  icon: string;
  type: string;
  items: any[];
}

export interface Settings {
  sidebarWidth: number;
  motion: boolean;
  hide_views: boolean;
  hide_sidebar: boolean;
} 