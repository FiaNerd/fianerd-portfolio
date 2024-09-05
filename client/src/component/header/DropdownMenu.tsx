import { Route } from '../../config/MenuItemsData';
import MenuItems from './MenuItems';

interface DropdownMenuProps {
  submenus: Route[];
  dropdown: boolean;
  depthLevel: number;
  closeMenu: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  submenus,
  dropdown,
  depthLevel,
  closeMenu,
}) => {
  const newDepthLevel = depthLevel + 1;
  
  // Adjust margin-left for deeper levels to avoid overlap
  const marginLeftClass = newDepthLevel > 1 ? `ml-${newDepthLevel * 4}` : 'ml-0';
  
  // Set a responsive width that adapts to text size and prevent overlap
  const dropdownClass = `dropdown ${marginLeftClass} ${dropdown ? 'block' : 'hidden'} ${
    newDepthLevel > 1 ? 'left-full top-0' : 'left-0 top-full'
  } lg:absolute bg-bg-secondary py-2 px-4 lg:shadow-md  ml-4 rounded-sm lg:mt-0 w-max max-w-[20em] z-30`;

  return (
    <ul className={dropdownClass}>
      {submenus.map((submenu, index) => (
        <li key={index} className='btn-profile relative'>
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
