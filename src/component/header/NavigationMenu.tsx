import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navRoutes } from '../../config/MenuItemsData';
import NavigationSubMenu from './NavigationSubMenu';

const NavigationMenu = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState('');
  const { t } = useTranslation('translation');
  const navigationMenuCloseDelay = 200;
  let navigationMenuCloseTimeout: NodeJS.Timeout | null = null;

  const navigationMenuClearCloseTimeout = () => {
    if (navigationMenuCloseTimeout) {
      clearTimeout(navigationMenuCloseTimeout);
      navigationMenuCloseTimeout = null;
    }
  };

  const navigationMenuLeave = () => {
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

  return (
    <>
      <div className="relative z-10">
        <ul className="flex items-center font-sub-heading justify-center flex-1 p-1 gap-6 xl:gap-20 list-none group">
          {navRoutes.map((menu, index) => (
            <li key={index} className="text-[1.4rem]">
              <button
                className={`inline-flex items-center justify-center h-auto px-4 py-2 text-sm font-medium transition-colors ${
                  navigationMenu === menu.title
                    ? ' dark:text-bg-secondary hover:text-accent-secondary active:text-btn-bg'
                    : 'text-text-accent dark:text-bg-secondary dark:hover:text-accent-primary active:text-btn-bg'
                }`}
                onMouseEnter={() => {
                  setNavigationMenuOpen(true);
                  setNavigationMenu(menu.title);
                }}
                onMouseLeave={navigationMenuLeave}
                onClick={(e) => menu.title === 'home' && handleScroll(e, 'home')}
              >
                <span dangerouslySetInnerHTML={{ __html: t(menu.title) }} className='md:text-[1.4rem]'/>
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
              </button>
            </li>
          ))}
        </ul>
      </div>

      {navigationMenuOpen && (
        <NavigationSubMenu
          navigationMenu={navigationMenu}
          onMouseEnter={navigationMenuClearCloseTimeout}
          onMouseLeave={navigationMenuLeave}
        />
      )}
    </>
  );
};

export default NavigationMenu;
