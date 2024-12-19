export interface Room {
  id: number;
  name: string;
  icon: string;
  sections: Section[];
  devices?: Device[];
}

export interface Section {
  id: number;
  name: string;
  icon: string;
  type: string;
}

export interface Device {
  id: string;
  name: string;
  area_id?: string;
  attributes?: {
    friendly_name?: string;
    [key: string]: any;
  };
}

export interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  rooms: Room[];
} 