import React, { useState } from 'react';
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

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();

    const [path, sectionId] = url.split('#');

    if (sectionId) {
      if (location.pathname === path) {
        setTimeout(() => handleScroll(sectionId), 100);
      } else {
        navigate(path);

        setTimeout(() => {
          handleScroll(sectionId);
        }, 300);
      }
    } else {
      navigate(path);
    }

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
                  ? [{ title: t('linkPortfolio'), url: '/portfolio' }, ...items.subMenu]
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