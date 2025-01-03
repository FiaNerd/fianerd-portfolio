import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useHeaderVisibility } from '../../hook/useHeaderVisibility';
import { useSidebarWidth } from '../../hook/useSidebarWidth';
import { useSmoothScroll } from '../../hook/useSmoothScroll'; // Import smooth scroll hook
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const headerVisible = useHeaderVisibility();
  const sidebarWidth = useSidebarWidth();

  useSmoothScroll(); 

  return (
    <div
      id="header"
      className={`fixed top-0 z-50 transition-transform duration-300 ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-2xl bg-bg-primary/5 dark:bg-bg-secondary/10`}
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
        <NavLink  to="/" className="flex-shrink-0">
          <img
            src={`/assets/images/logos/Logo${currentTheme === 'dark' ? 'Dark' : 'Light'}.svg`}
            alt="Logo"
            className="h-10 md:h-12"
          />
        </NavLink>

        <div className="hidde lg:flex">
          <NavbarDesktop />
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <SelectLanguage />
          <NavLink
            to="/contact"
            className="hidden lg:flex font-sub-heading text-lg lg:text-xl font-medium  border-2 rounded border-btn-bg px-3 py-1 md:px-4 md:py-2 text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary"
          >
            {t('contact')}
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
