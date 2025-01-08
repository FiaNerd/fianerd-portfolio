import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navRoutes } from '../../config/MenuItemsData';
import NavigationSubMenu from './NavigationSubMenu';

const NavigationMenu = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useTranslation('translation');

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

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };
  
  const handleMenuClick = (e: React.MouseEvent, url: string) => {
 
    if (url.includes('#')) {
      const [path, sectionId] = url.split('#');

      if (location.pathname === path) {
        e.preventDefault();
        handleScroll(e, sectionId); 
        
      } else {
        navigate(path); 
        setNavigationMenuOpen(false);
      }
    } else {
      navigate(url); 
    }

    setNavigationMenuOpen(false);
  };

  return (
    <>
      <div className="relative z-10">
        <ul className="flex items-center font-sub-heading justify-center flex-1 p-1 gap-6 xl:gap-20 list-none group">
          {navRoutes.map((menu, index) => (
            <li key={index} className="text-[1.4rem]">
              <NavLink
                to={menu.url}
                className={({ isActive }) =>
                  `inline-flex items-center justify-center text-text-accent h-auto px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'dark:text-bg-secondary hover:text-accent-secondary active:text-btn-bg'
                      : 'text-text-accent dark:text-bg-secondary dark:hover:text-accent-primary active:text-btn-bg'
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
                  <svg
                    className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${
                      navigationMenuOpen && navigationMenu === menu.title ? '-rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {navigationMenuOpen && (
        <NavigationSubMenu
          navigationMenu={navigationMenu}
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={handleMouseLeave}
          closeMenuOnClick={() => setNavigationMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavigationMenu;
