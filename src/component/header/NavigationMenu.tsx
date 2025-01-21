import { startTransition, useEffect, useState } from 'react';
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

  // const handleScroll = (e: React.MouseEvent, sectionId: string) => {
  //   e.preventDefault();
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     // window.scrollTop({ top: element.offsetTop, behavior: 'smooth' });
  //     // window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }; 
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
  
  
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [_, sectionId] = location.hash.split('#');
    
  //   if (sectionId) {
  //     handleScroll(undefined, sectionId); // Scroll to section after the page has changed
  //   }
  // }, [location]);  // This will trigger on every location change (including hash change)
  
  // const handleScroll = (e: React.MouseEvent | undefined, sectionId: string) => {
  //   if (e) {
  //     e.preventDefault(); 
  //   }
  
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     console.error(`Section ${sectionId} not found!`);
  //   }
  // };


  const handleMenuClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault(); // Prevent default link behavior
    
    const [path, sectionId] = url.split('#');
    
    // Wrap navigation in startTransition
    startTransition(() => {
      if (sectionId) {
        if (location.pathname === path) {
          handleScroll(undefined, sectionId); // Scroll to section if on the same page
        } else {
          navigate(path); // Navigate to the path
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
     

        <ul className="flex items-center font-sub-heading justify-center flex-1 p-1 gap-6 xl:gap-20 list-none group">
          {navRoutes.map((menu, index) => (
            <li key={index} className="text-[1.4rem]">
              <NavLink
                to={menu.url.replace('#', '')}
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
