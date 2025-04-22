import { Route } from '../config/MenuItemsData';

export interface MenuTitle {
  title: string;
}

export interface ArrowProps {
  navigationMenuOpen: boolean;
  navigationMenu?: string;
  menu?: MenuTitle;
}

export interface DropDownMenuProps {
  submenus: Route[];
  dropdown: boolean;
  depthLevel: number;
  closeMenu: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface AnimatedHamburgerProps {
  isActive: boolean;
  toggleMenu: (value: (prev: boolean) => boolean) => void;
}

export interface MenuItemsProps {
  items: Route;
  depthLevel: number;
  closeMenu: () => void;
}
