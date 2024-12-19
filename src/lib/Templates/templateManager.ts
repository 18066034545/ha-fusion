import type { Template, Room, Device } from '$lib/Templates/types';
import { dashboard } from '$lib/Stores';
import { get } from 'svelte/store';

export class TemplateManager {
  static matchDevicesToTemplate(template: Template, haDevices: Device[]) {
    const matchedRooms = template.rooms.map((room: Room) => {
      const matchedDevices = haDevices.filter(device => 
        device.area_id === room.name || 
        device.attributes?.friendly_name?.includes(room.name)
      );
      
      return {
        ...room,
        devices: matchedDevices
      };
    });

    return {
      ...template,
      rooms: matchedRooms
    };
  }

  static async applyTemplate(template: Template, haConnection: any) {
    try {
      // 获取 HA 设备列表
      const devices = await haConnection.getDevices();
      
      // 匹配设备到模板
      const configuredTemplate = this.matchDevicesToTemplate(template, devices);
      
      // 更新 dashboard store
      const currentDashboard = get(dashboard);
      dashboard.set({
        ...currentDashboard,
        views: configuredTemplate.rooms.map(room => ({
          id: room.id,
          name: room.name,
          icon: room.icon,
          sections: room.sections
        }))
      });

      return true;
    } catch (error) {
      console.error('Failed to apply template:', error);
      return false;
    }
  }
} 