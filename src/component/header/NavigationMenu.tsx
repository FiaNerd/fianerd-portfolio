import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Trans, useTranslation } from 'react-i18next';
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

  const navigationMenuReposition = (navElement: HTMLElement) => {
    const rect = navElement.getBoundingClientRect();
    const submenuWidth = 500;

    setSubmenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + rect.width / 2 - submenuWidth / 2,
    });
  };

  const navigationMenuClearCloseTimeout = () => {
    if (navigationMenuCloseTimeout !== null) {
      clearTimeout(navigationMenuCloseTimeout);
    }
  };

  return (
    <>
      <nav className="relative z-10 w-auto">
        <ul className="flex items-center justify-center flex-1 p-1 gap-0 md:gap-0 lg:gap-6 xl:gap-20 list-none border rounded-md text-text-primary group">
          {navRoutes.map((menu, index) => (
            <li key={index}>
              <button
                className={`inline-flex items-center justify-center h-auto px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  navigationMenu === menu.title ? 'text-text-primary' : 'hover:text-bg-secondary active:text-bg-secondary'
                }`}
                onMouseEnter={(e) => {
                  setNavigationMenuOpen(true);
                  navigationMenuReposition(e.target as HTMLElement);
                  setNavigationMenu(menu.title);
                }}
                onMouseLeave={navigationMenuLeave}
              >
                <Trans><span dangerouslySetInnerHTML={{ __html: t(menu.title) }} /></Trans>

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
      </nav>

      {navigationMenuOpen &&
        createPortal(
            <div
            className="absolute z-10 bg-bg-primary shadow-sm py-4 pl-4"
            style={{
              top: submenuPosition.top,
              left: submenuPosition.left,
              width: 'max-content', 
            //   padding: '0 0.2em', 
            }}
            onMouseEnter={navigationMenuClearCloseTimeout}
            onMouseLeave={navigationMenuLeave}
          >
          
            {navRoutes.find((route) => route.title === navigationMenu)?.subMenu && (
              <div className="flex max-w-auto mt-6 gap-4"> 

                {/* Profile or Portfolio Section */}
                <div
                  className={`w-1/3 rounded p-4 max-w-[8em] ${
                    navigationMenu === 'profile'
                      ? 'bg-gradient-to-br from-neutral-800 to-black grid grid-cols-1 xl:grid-cols-2'
                      : 'bg-gradient-to-br from-blue-800 to-blue-500 grid grid-cols-1'
                  }`}
                >
                  <img
                    src={
                      navigationMenu === 'profile'
                        ? 'path-to-profile-image.jpg'
                        : 'path-to-portfolio-image.jpg'
                    }
                    alt={navigationMenu}
                    className="h-auto w-full rounded mb-2"
                  />
                  <span className="block font-bold text-sm">
                    {navigationMenu === 'profile' ? 'Profile' : 'Portfolio'}
                  </span>
                  <span className="block text-xs opacity-60">
                    {navigationMenu === 'profile'
                      ? 'A personal profile showcasing my skills'
                      : 'A collection of my best works'}
                  </span>
                </div>

                {/* Submenu Section */}
                <div
                  className={`w-2/3 grid gap-4 ${
                    navigationMenu === 'profile'
                      ? 'grid-cols-1 xl:grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  {navRoutes
                    .find((route) => route.title === navigationMenu)
                    ?.subMenu?.map((subMenuItem, subIndex) => (
                      <div key={subIndex} className="flex flex-col py-1">
                        <NavLink
                          to={subMenuItem.url}
                          className="text-sm font-medium hover:text-hover-text dark:hover:text-bg-secondary"
                          onClick={() => setNavigationMenuOpen(false)}
                        >
                          {t(subMenuItem.title)}
                        </NavLink>
                        <span className="block text-xs font-light leading-5 opacity-50 line-clamp-2">
                          Som small description about the submenu item here
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default NavigationMenu;
