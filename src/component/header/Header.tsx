import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(37); 
  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 121) {
        setHeaderVisible(currentScrollY < lastScrollY.current);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const sidebarWidth = sidebar.getBoundingClientRect().width;
        setSidebarWidth(sidebarWidth > 37 ? 55 : 37);
      } else {
        setSidebarWidth(window.innerWidth >= 768 ? 55 : 37);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initial setup

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="header"
      className={`fixed top-0 z-50 transition-transform duration-300 ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-2xl bg-bg-primary/5 dark:bg-bg-secondary/10`}
      style={{
        left: `${sidebarWidth}px`,
        width: `calc(100% - ${sidebarWidth}px)`
      }}
    >
      {/* Top Announcement Bar */}
      <div className="bg-accent-primary dark:bg-bg-primary">
        <p className="text-xs py-2 md:text-sm text-center text-hover-text dark:text-text-secondary mb-0">
          {t('headerTitle')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          {currentTheme === 'dark' ? (
            <img
              src="/assets/images/logos/LogoDark.svg"
              alt="Logo"
              className="h-10 md:h-12"
            />
          ) : (
            <img
              src="/assets/images/logos/LogoLight.svg"
              alt="Logo"
              className="h-10 md:h-12"
            />
          )}
        </NavLink>

        {/* Desktop Navbar */} 
        <div className="hidden md:flex">
          <NavbarDesktop />
        </div>

        {/* Mobile Navbar and Controls */}
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <SelectLanguage />
          <NavLink
            to="/contact"
            className="hidden font-heading font-medium md:block text-sm md:text-lg border-2 rounded border-btn-bg px-3 py-1 md:px-4 md:py-2 text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary"
          >
            {t('contact')}
          </NavLink>
          <div className="md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
