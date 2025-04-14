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
    const handleHashNavigation = () => {
      const sectionId = location.hash.replace('#', '');

      if (sectionId) {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      }
    };

    handleHashNavigation();
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
    // Navigate to the base route if not already there
    if (location.pathname !== url) {
      navigate(url);
    }

    // Scroll to the section after navigation
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          console.log(`Scrolling to section: ${sectionId}`);
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      }, 0); // Delay to ensure the page has loaded
    }

    closeMenuOnClick();
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
