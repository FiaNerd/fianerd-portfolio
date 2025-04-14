import React, { Suspense, useState, useEffect, startTransition } from 'react';
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
  const { t, i18n } = useTranslation('translation');
  const isTabletOrMobile = useIsTabletOrMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Preload translations if not already loaded
    if (!i18n.hasResourceBundle('translation', i18n.language)) {
      i18n.loadNamespaces('translation');
    }
  }, [i18n]);

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

  const handleMenuClick = (
    e: React.MouseEvent,
    url: string,
    sectionId?: string
  ) => {
    e.preventDefault();

    startTransition(() => {
      // If we are already on the destination (portfolio) page…
      if (sectionId && location.pathname === url) {
        // Update the URL with the hash but then immediately scroll
        navigate(`${url}#${sectionId}`);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (location.pathname !== url) {
        // When not on the portfolio page, navigate normally with the hash if provided
        if (sectionId) {
          navigate(`${url}#${sectionId}`);
        } else {
          navigate(url);
        }
      }

      setTimeout(() => {
        closeMenu();
      }, 300);
    });
  };

  const renderLinkOrButton = () => {
    if (!items.title || !items.url) {
      console.warn('Menu item is missing title or URL:', items);
      return null;
    }

    return (
      <NavLink
        to={items.url}
        className="px-4 font-sub-heading tracking-wider text-xl hover:text-nav-hover focus:text-nav-hover"
        onClick={(e) => handleMenuClick(e, items.url)}
      >
        <span dangerouslySetInnerHTML={{ __html: t(items.title) }} />
      </NavLink>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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

              <Suspense fallback={<div>Loading submenu...</div>}>
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
              </Suspense>
            </>
          ) : (
            renderLinkOrButton()
          )}
        </li>
      </ul>
    </Suspense>
  );
};

export default MenuItems;
