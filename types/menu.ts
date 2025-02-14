export interface MenuItem {
  name: string;
  featured?: boolean;
  href?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
