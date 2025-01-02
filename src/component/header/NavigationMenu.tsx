import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../config/MenuItemsData';

const NavigationMenu = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState('');
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const { t } = useTranslation('translation');
  const navigationMenuCloseDelay = 200;
  let navigationMenuCloseTimeout: NodeJS.Timeout | null = null;

  const navigationMenuLeave = () => {
    navigationMenuCloseTimeout = setTimeout(() => {
      setNavigationMenuOpen(false);
      setNavigationMenu('');
    }, navigationMenuCloseDelay);
  };
  
  const navigationMenuClearCloseTimeout = () => {
    if (navigationMenuCloseTimeout) {
      clearTimeout(navigationMenuCloseTimeout);
      navigationMenuCloseTimeout = null;
    }
  };
  
  const navigationMenuReposition = (navElement: HTMLElement) => {
    const rect = navElement.getBoundingClientRect();
    const submenuWidth = 500;
  
    setSubmenuPosition({
      top: rect.bottom + window.scrollY, 
      left: rect.left + rect.width / 2 - submenuWidth / 2 + window.scrollX, 
    });
  };
  


  return (
    <>
      <div className="relative z-10 w-auto">
        <ul className="flex items-center justify-center flex-1 p-1 gap-0 md:gap-0 lg:gap-6 xl:gap-20 list-none text-text-primary group">
          {navRoutes.map((menu, index) => (
            <li key={index}>
              <button
                className={`inline-flex items-center justify-center h-auto px-4 py-2 text-sm font-medium transition-colors ${
                  navigationMenu === menu.title
                    ? 'text-text-primary hover:text-accent-secondary dark:hover:text-bg-secondary'
                    : ' active:text-bg-secondary'
                }`}
                onMouseEnter={(e) => {
                  setNavigationMenuOpen(true);
                  navigationMenuReposition(e.target as HTMLElement);
                  setNavigationMenu(menu.title);
                }}
                onMouseLeave={navigationMenuLeave}
              >
                <span dangerouslySetInnerHTML={{ __html: t(menu.title) }} />
            
                {menu.icon && (
                  <svg
                    className={`relative top-[1px] ml-1 h-4 w-4 ease-out duration-300 ${
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
              </button>
            </li>
          ))}
        </ul>
      </div>

      {navigationMenuOpen && (navigationMenu === 'profile' || navigationMenu === 'portfolio') ? (
  <div
    className="absolute z-10 bg-bg-primary shadow-sm p-6 rounded-l mt-[4em]"
    onMouseEnter={navigationMenuClearCloseTimeout}
    onMouseLeave={navigationMenuLeave}
  >
    {navRoutes.find((route) => route.title === navigationMenu)?.subMenu?.length ? (
      <div
        className={`grid gap-8 ${
          navigationMenu === 'profile' ? 'grid-cols-2 xl:grid-cols-2' : 'grid-cols-2 '
        } max-w-[50em]`}
      >
        {/* Profile or Portfolio Section */}
        <div
          className={`rounded p-4 ${
            navigationMenu === 'profile'
              ? 'bg-gradient-to-br from-neutral-800 to-black'
              : 'bg-gradient-to-br from-blue-800 to-blue-500'
          }`}
        >
          <img
            src={
              navigationMenu === 'profile'
                ? 'path-to-profile-image.jpg'
                : 'path-to-portfolio-image.jpg'
            }
            alt={navigationMenu}
            className="w-full h-auto rounded-lg mb-4"
          />
          <span className="block font-bold text-base">
            {navigationMenu === 'profile' ? 'Profile' : 'Portfolio'}
          </span>
          <span className="block text-sm opacity-70">
            {navigationMenu === 'profile'
              ? 'A personal profile showcasing my skills'
              : 'A collection of my best works'}
          </span>
        </div>

        {/* Submenu Section */}
        <div
          className={`grid gap-6 ${
            navigationMenu === 'profile' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {navRoutes.find((route) => route.title === navigationMenu)?.subMenu?.map(
            (subMenuItem, subIndex) => (
              <div key={subIndex} className="flex flex-col py-2">
                <NavLink
                  to={subMenuItem.url}
                  className="text-sm font-medium text-text-primary hover:text-accent-secondary dark:hover:text-bg-secondary"
                  onClick={() => setNavigationMenuOpen(false)}
                >
                  {t(subMenuItem.title)}
                </NavLink>
                <span className="block text-xs text-text-secondary font-light leading-6 opacity-60">
                  {/* Optional description for submenu items */}
                  Some small description about the submenu item here
                </span>
              </div>
            )
          )}
        </div>
      </div>
    ) : null}
  </div>
) : null}


    </>
  );
};

export default NavigationMenu;
