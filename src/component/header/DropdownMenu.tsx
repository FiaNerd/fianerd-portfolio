import { Route } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

interface IProps {
  submenus: Route[]
  dropdown: boolean
  depthLevel: number
  closeMenu: () => void
}

const DropdownMenu = ({
  submenus,
  dropdown,
  depthLevel,
  closeMenu,
}: IProps) => {
  const newDepthLevel = depthLevel + 1;

  // Apply predefined margin classes based on depthLevel
  const marginLeftClass = newDepthLevel > 1 ? `ml-${newDepthLevel * 4}` : 'ml-0'; // Adjust multiplier as needed

  const dropdownClass = `dropdown ${dropdown ? 'block' : 'hidden'} ${
    newDepthLevel > 1 ? 'left-full top-0' : 'left-0 top-full'
  } lg:absolute bg-bg-primary pt-2 pb-[0.6em] px-4 lg:shadow-md rounded-sm w-max max-w-[20em] z-30`;

  return (
    <ul className={`${dropdownClass} ${marginLeftClass}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="relative">
          <MenuItems
            items={submenu}
            depthLevel={newDepthLevel}
            closeMenu={closeMenu}
          />
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
