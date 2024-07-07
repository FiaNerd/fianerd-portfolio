// src/components/DropdownMenu.tsx

import { NavLink } from "react-router-dom";
import { Route } from "../../config/MenuItemsData";

interface IProp {
  submenus: Route[];
}

const DropdownMenu = ({ submenus }: IProp) => {
  return (
    <ul className="absolute min-w-[7rem] left-0 top-full bg-purple py-2 shadow-md rounded-sm hidden group-hover:block">
      {submenus.map((submenu, index) => (
        <li key={index} className="px-4 py-1">
          <NavLink to={submenu.url} className="text-white font-title text-2xl tracking-wider hover:text-gray-300">
            {submenu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
