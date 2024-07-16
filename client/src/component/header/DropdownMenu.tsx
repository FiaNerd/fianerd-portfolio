
import { Route } from "../../config/MenuItemsData";
import MenuItems from "./MenuItems";

interface DropdownMenuProps {
  submenus: Route[];
  dropdown: boolean;
  depthLevel: number;
}

const DropdownMenu = ({ submenus, dropdown, depthLevel}: DropdownMenuProps) => {
  const newDepthLevel = depthLevel + 1;
  const dropdownClass = newDepthLevel > 1 ? "mt-4" : "";

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? "block" : "hidden"} ${
        newDepthLevel > 1 ? "left-full top-0" : "left-0 top-full"
      } lg:absolute lg:min-w-[7rem] bg-dark-green lg:py-4 lg:shadow-md rounded-sm mb-4`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="relative">
          <MenuItems items={submenu} depthLevel={newDepthLevel} />
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
