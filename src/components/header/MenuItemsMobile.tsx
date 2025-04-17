import React, { Suspense, useState, useEffect, startTransition } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/svg/Arrow';
import { Route } from '../../config/MenuItemsData';
import useIsTabletOrMobile from '../../hook/useTabletOrMobile';
import DropdownMenuMobile from './DropdownMenuMobile';
import LoadingSpinner from '../partials/LoadingSpinner';

interface MenuItemsProps {
  items: Route;
  depthLevel: number;
  closeMenu: () => void;
}

const MenuItemsMobile: React.FC<MenuItemsProps> = ({
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
    e: React.MouseEvent | React.TouchEvent,
    url: string,
    sectionId?: string
  ) => {
    e.preventDefault();

    startTransition(() => {
      // Navigate to the base route if not already there
      if (location.pathname !== url) {
        navigate(url);
      }

      // Scroll to the section after navigation
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            console.log('Scrolling to element:', element);
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.warn(`Element with ID "${sectionId}" not found.`);
          }
        }, 400);
      }

      // Close the menu after navigation
      setTimeout(() => {
        closeMenu();
      }, 400);
    });
  };

  const renderLinkOrButton = () => {
    if (!items.title || !items.url) {
      return null;
    }

    return (
      <NavLink
        to={items.url}
        className="px-4 font-sub-heading tracking-wider text-xl hover:text-nav-hover focus:text-nav-hover"
        onClick={(e) =>
          startTransition(() => {
            handleMenuClick(e, items.url, items.sectionId);
          })
        }
      >
        <span dangerouslySetInnerHTML={{ __html: t(items.title) }} />
      </NavLink>
    );
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
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

export default MenuItemsMobile;
