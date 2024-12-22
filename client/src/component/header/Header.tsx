import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(37); // Default mobile width
  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 121) {
        setHeaderVisible(window.scrollY < lastScrollY);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
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

    // Attach event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
        <div
        className={`fixed top-0 z-50 transition-transform duration-300 ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        } backdrop-blur-md bg-white/70 dark:bg-black/70`}
        style={{
          left: `${sidebarWidth}px`,
          width: `calc(100% - ${sidebarWidth}px)`,
          height: '100px', // Set the height of the header
        }}
      >
      {/* Top Announcement Bar */}
      <div className="bg-orange-100 dark:bg-black">
        <p className="text-xs py-2 md:text-sm text-center text-amber-950 dark:text-amber-100 mb-0">
          {t('headerTitle')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex items-center justify-between px-4">
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
            className="hidden md:block text-sm md:text-lg border-2 rounded-full border-accent-secondary px-3 py-1 md:px-4 md:py-2 text-accent-secondary hover:bg-accent-primary hover:border-accent-primary hover:text-hover-text"
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
