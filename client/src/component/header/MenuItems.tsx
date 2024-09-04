import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Route } from '../../config/MenuItemsData';
import { useClickOutside } from '../../hook/useClickOutside'; // Import the custom hook
import DropdownMenu from './DropdownMenu';

interface MenuItemsProps {
  items: Route;
  depthLevel: number;
  closeMenu: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  items,
  depthLevel,
  closeMenu,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation('translation');
  
  // Create a ref using the custom hook
  const ref = useClickOutside<HTMLLIElement>(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      setDropdown(false);
    }
  })
  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    if (!items.subMenu || items.subMenu.length === 0) {
      setDropdown(false);
    }
  };

  const handleButtonClick = () => {
    if (items.subMenu && items.subMenu.length > 0) {
      setDropdown((prev) => !prev);
    } else {
      closeMenu();
    }
  };

  const renderLinkOrButton = () => {
    if (items.title.toLowerCase() === 'kontakt') {
      return (
        <button
          onClick={handleButtonClick}
          className='btn-contact px-4 py-2 font-heading tracking-wider text-xl rounded-md'>
          {t(items.title)}
        </button>
      );
    } else {
      return (
        <NavLink
          to={items.url}
          className='btn-menu px-4 py-[0.6em] font-heading tracking-wider text-xl'
          onClick={closeMenu}>
          {t(items.title)}
        </NavLink>
      );
    }
  };

  return (
    <ul
      className='btn-portfolio text-text-primary flex items-center space-x-4 hover:text-text-secondary'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li ref={ref} className='relative group'>
        {items.subMenu && items.subMenu.length > 0 ? (
          <>
            <button
              onClick={handleButtonClick}
              className='btn-menu px-4 py-4 text-xl font-heading tracking-wider'>
              {t(items.title)}{' '}
              {items.icon && (
                <FontAwesomeIcon
                  icon={items.icon}
                  className='ml-1 h-[0.8em] text-center'
                />
              )}
            </button>
            <DropdownMenu
              submenus={items.subMenu}
              dropdown={dropdown}
              depthLevel={depthLevel}
              closeMenu={closeMenu}
            />
          </>
        ) : (
          renderLinkOrButton()
        )}
      </li>
    </ul>
  );
};

export default MenuItems;
