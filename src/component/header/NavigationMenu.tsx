import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/svg/Arrow';
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
                  `inline-flex items-center justify-center text-nav-text h-auto px-4 py-2 text-sm font-medium transition-colors ${
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
                  <Arrow navigationMenuOpen={navigationMenuOpen} navigationMenu={navigationMenu} menu={menu} />
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
