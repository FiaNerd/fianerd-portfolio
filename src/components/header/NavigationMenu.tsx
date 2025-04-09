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

  const closeMenuOnClick = () => {
    setNavigationMenuOpen(false);
    setNavigationMenu('');
  };

  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();

    const [path, sectionId] = url.split('#'); // Split the URL into path and section ID

    startTransition(() => {
      if (sectionId) {
        if (location.pathname === path) {
          // If already on the correct path, scroll to the section
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to the path and include the hash fragment
          navigate(`${path}#${sectionId}`, { replace: true });
        }
      } else {
        // Navigate to the path without a hash fragment
        navigate(path, { replace: true });
      }
    });

    closeMenuOnClick();
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
