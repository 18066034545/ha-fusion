export interface Dashboard {
  views: View[];
  theme?: Theme;
  hide_views?: boolean;
  hide_sidebar?: boolean;
  sidebarWidth?: number;
}

export interface View {
  id: number;
  name: string;
  icon: string;
  sections: ViewSection[];
}

export interface ViewSection {
  id: number;
  name: string;
  icon: string;
  type: string;
  items: any[];
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
} 