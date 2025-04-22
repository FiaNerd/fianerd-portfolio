export namespace Menu {
  export interface MenuTitle {
    title: string;
  }

  export interface ArrowProps {
    navigationMenuOpen: boolean;
    navigationMenu?: string;
    menu?: MenuTitle;
  }
}
