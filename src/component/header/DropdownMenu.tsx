import { Route } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

interface IProps {
  submenus: Route[]
  dropdown: boolean
  depthLevel: number
  closeMenu: () => void
  onMouseEnter?: () => void 
  onMouseLeave?: () => void 
}

const DropdownMenu = ({
  submenus,
  dropdown,
  depthLevel,
  closeMenu,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  // Increase the depth level by 1 for nested dropdowns
  const newDepthLevel = depthLevel + 1;

  // Define the margin left based on the depth level, adjusting multiplier as needed
  const marginLeftClass = newDepthLevel > 1 ? `ml-${newDepthLevel * 2}` : 'ml-0'; // Adjust multiplier to 4 for better spacing

  // Define the dropdown positioning class, with adjustments for deeper levels
  const dropdownClass = `${dropdown ? 'block' : 'hidden'} ${
    newDepthLevel > 1 ? 'left-full top-0' : 'left-0 top-full'
  } lg:absolute lg:shadow-md bg-bg-primary rounded-sm w-max max-w-[20em] z-30`;

  return (
    <ul
      className={`${dropdownClass} ${marginLeftClass}`}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="relative text-[1.2rem] cursor-pointer text-text-primary hover:text-hover-text hover:bg-accent-secondary dark:hover:bg-bg-secondary py-2">
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
