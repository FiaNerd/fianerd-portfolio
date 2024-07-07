// src/components/MenuItems.tsx

import { NavLink } from "react-router-dom";
import { Route } from "../../config/MenuItemsData";
import DropdownMenu from "./DropdownMenu";

interface MenuItemsProps {
  items: Route;
  className?: string;
}

const MenuItems = ({ items, className }: MenuItemsProps) => {
  return (
    <li className="relative group">
      <NavLink to={items.url} className={`px-4 py-4 font-title font-bold tracking-wider text-2xl text-white hover:text-gray-300 ${className}`}>
        {items.title}
      </NavLink>
      {items.subMenu && items.subMenu.length > 0 && (
        <DropdownMenu submenus={items.subMenu} />
      )}
    </li>
  );
};

export default MenuItems;
