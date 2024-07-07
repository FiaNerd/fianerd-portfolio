import { NavLink } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu"; // Adjust the import based on your directory structure
import { Route } from "../../config/MenuItemsData"; // Adjust this import based on your data structure

interface MenuItemsProps {
  items: Route;
  depthLevel: number;
}

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            className={`px-4 py-4 font-title font-bold tracking-wider text-2xl text-white hover:text-gray-300`}
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.title} {depthLevel > 0 ? <span>&raquo;</span> : <span />}
          </button>
          <DropdownMenu
            submenus={items.subMenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <NavLink
          to={items.url}
          className="mt-6 px-4 py-4 font-title tracking-wider text-2xl text-white hover:text-gray-300"
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
