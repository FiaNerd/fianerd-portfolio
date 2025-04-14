import { startTransition, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/svg/Arrow';
import { navRoutes } from '../../config/MenuItemsData';
import NavigationSubMenuDropDownDesktop from './NavigationSubMenuDropDownDesktop';

const NavigationMenu = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (!i18n.hasResourceBundle('translation', i18n.language)) {
      i18n.loadNamespaces('translation');
    }
  }, [i18n]);

  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const navigationMenuCloseDelay = 200;
  let navigationMenuCloseTimeout: NodeJS.Timeout | null = null;

  const clearCloseTimeout = () => {
    if (navigationMenuCloseTimeout) {
      clearTimeout(navigationMenuCloseTimeout);
      navigationMenuCloseTimeout = null;
    }
  };

  const handleMouseLeave = () => {
    navigationMenuCloseTimeout = setTimeout(() => {
      setNavigationMenuOpen(false);
      setNavigationMenu('');
    }, navigationMenuCloseDelay);
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      // Wait briefly for the element to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      }, 100); // You may need to adjust this delay
    }
  }, [location]);

  const closeMenuOnClick = () => {
    setNavigationMenuOpen(false);
    setNavigationMenu('');
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
        closeMenuOnClick();
      }, 300);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative z-10">
        <ul className="flex items-center font-sub-heading justify-center flex-1 p-1 gap-4 lg:gap-1 xl:gap-20 list-none group">
          {navRoutes.map((menu, index) => (
            <li key={index} className="text-[1.4rem]">
              <NavLink
                to={menu.url}
                className={({ isActive }) =>
                  `inline-flex items-center justify-center text-nav-text h-auto px-1 lg:px-2 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-nav-text hover:text-nav-hover active:text-nav-hover'
                      : 'text-nav-text hover:text-nav-hover active:text-nav-hover'
                  }`
                }
                onMouseEnter={() => {
                  startTransition(() => {
                    setNavigationMenuOpen(true);
                    setNavigationMenu(menu.title);
                  });
                }}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => {
                  e.preventDefault();

                  startTransition(() => {
                    handleMenuClick(e, menu.url, menu.sectionId);
                  });
                }}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: t(menu.title) }}
                  className="md:text-[1.4rem]"
                />
                {menu.icon && (
                  <Arrow
                    navigationMenuOpen={navigationMenuOpen}
                    navigationMenu={navigationMenu}
                    menu={menu}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Suspense fallback={<div>Loading submenu...</div>}>
        {navigationMenuOpen && (
          <NavigationSubMenuDropDownDesktop
            navigationMenu={navigationMenu}
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={handleMouseLeave}
            closeMenuOnClick={() => setNavigationMenuOpen(false)}
          />
        )}
      </Suspense>
    </Suspense>
  );
};

export default NavigationMenu;
