import React, { startTransition, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/svg/Arrow';
import { Route } from '../../config/MenuItemsData';
import useIsTabletOrMobile from '../../hook/useTabletOrMobile';
import DropdownMenuMobile from './DropdownMenuMobile';

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
  const isTabletOrMobile = useIsTabletOrMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const handleButtonClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault(); // Prevent default link behavior

    const [path, sectionId] = url.split('#'); // Split the URL to check for a section ID

    startTransition(() => {
      // Navigate to the correct section based on URL
      if (sectionId) {
        // Scroll to the section if it's on the same page
        if (location.pathname === path) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Otherwise, navigate to the path with the section ID (scroll will be handled)
          navigate(`${path}#${sectionId}`, { replace: true });
        }
      } else {
        navigate(path); // Navigate to the path without a section ID
      }
    });

    closeMenu();
  };

  const renderLinkOrButton = () => {
    if (items.url) {
      return (
        <NavLink
          to={items.url}
          className="px-4 font-sub-heading tracking-wider text-xl hover:text-nav-hover focus:text-nav-hover"
          onClick={(e) => handleMenuClick(e, items.url)}
        >
          <span dangerouslySetInnerHTML={{ __html: t(items.title) }} />
        </NavLink>
      );
    }
  };

  return (
    <ul
      className="text-nav-text font-sub-heading font-medium flex items-center space-x-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <li className="relative group">
        {items.subMenu && items.subMenu.length > 0 ? (
          <>
            <button
              onClick={handleButtonClick}
              className="flex items-center px-4 text-xl hover:text-nav-hover dark:hover:text-nav-hover tracking-wider"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Trans>{t(items.title)}</Trans>
              {items.icon && (
                <div className="flex items-center">
                  <Arrow navigationMenuOpen={dropdown} />
                </div>
              )}
            </button>

            <DropdownMenuMobile
              submenus={
                isTabletOrMobile && items.title === 'portfolio'
                  ? [
                      { title: t('linkPortfolio'), url: '/portfolio' },
                      ...items.subMenu,
                    ]
                  : items.subMenu
              }
              dropdown={dropdown}
              depthLevel={depthLevel}
              closeMenu={closeMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
