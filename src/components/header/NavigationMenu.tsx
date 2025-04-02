import { startTransition, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/svg/Arrow';
import { navRoutes } from '../../config/MenuItemsData';
import NavigationSubMenuDropDownDesktop from './NavigationSubMenuDropDownDesktop';

const NavigationMenu = () => {
  const { t } = useTranslation('translation');
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

  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault(); // Prevent default link behavior

    const [path, sectionId] = url.split('#');

    startTransition(() => {
      if (sectionId) {
        if (location.pathname === path) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate(`${path}#${sectionId}`, { replace: true });
        }
      } else {
        navigate(path); // Navigate without section ID
      }
    });

    // Close the navigation menu after clicking
    setNavigationMenuOpen(false);
  };

  return (
    <>
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
                  setNavigationMenuOpen(true);
                  setNavigationMenu(menu.title);
                }}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleMenuClick(e, menu.url)}
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

      {navigationMenuOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationSubMenuDropDownDesktop
            navigationMenu={navigationMenu}
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={handleMouseLeave}
            closeMenuOnClick={() => setNavigationMenuOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default NavigationMenu;
