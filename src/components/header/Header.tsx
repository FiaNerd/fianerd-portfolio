import { Icon } from '@iconify/react/dist/iconify.js';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useSidebarWidth } from '../../hook/useSidebarWidth';
import { useSmoothScroll } from '../../hook/useSmoothScroll';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const sidebarWidth = useSidebarWidth();
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isHidden]);  // This should only trigger if the header's visibility changes

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 200);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (!isNavigating) {
      const initialScrollY = window.scrollY;

      if (initialScrollY > 0) {
        setIsHidden(true); 
      }
    }
  }, [isNavigating]);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) {
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setIsHidden(true); // Hide header when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isNavigating]);

  useSmoothScroll(headerHeight);

  return (
    <div
      ref={headerRef}
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} backdrop-blur-2xl bg-bg-secondary/5 dark:bg-bg-primary/5`}
      style={{
        left: `${sidebarWidth}px`,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      {/* Top Announcement Bar */}
      <div className="bg-accent-primary dark:bg-bg-primary">
        <p className="text-xs py-2 px-4 md:text-sm text-center text-hover-text dark:text-text-secondary mb-0">
          {t('headerTitle')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex items-center justify-between py-2 px-4">
        <NavLink to="/" className="flex-shrink-0">
          <img
            src={`/assets/images/logos/Logo${currentTheme === 'dark' ? 'Dark' : 'Light'}.svg`}
            alt="Logo"
            className="w-[6em]"
          />
        </NavLink>

        <div className="hidden lg:flex">
          <NavbarDesktop />
        </div>

        <div className="flex items-center gap-4">
          <div className='hidden lg:flex items-center gap-4'>
            <ThemeSwitch />
            <SelectLanguage />
          </div>
          <NavLink
            to="/contact"
            className="hidden lg:flex justify-center items-center font-sub-heading text-lg gap-2 lg:text-xl font-medium border-2 rounded border-btn-bg px-3 py-1 md:px-4 md:py-2 text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary"
          >
            <Icon icon="line-md:email-twotone" width="24" height="24" /> {t('contact')}
          </NavLink>

          <div className="lg:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;