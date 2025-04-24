import { Icon } from '@iconify/react/dist/iconify.js';
import { startTransition, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useSidebarWidth } from '../../hook/useSidebarWidth';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = ({ isHeaderVisible }: { isHeaderVisible: boolean }) => {
  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;
  const sidebarWidth = useSidebarWidth();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    startTransition(() => {
      navigate(path);
    })
  }

  return (
    <header
      ref={headerRef}
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
      } backdrop-blur-xl bg-bg-secondary/5 dark:bg-bg-primary/5`}
      style={{
        left: `${sidebarWidth}px`,
        width: `calc(100% - ${sidebarWidth}px)`,
        maxWidth: '100vw',
      }}
    >
      {/* Side Announcement Bar */}
      <div className="bg-accent-primary dark:bg-bg-primary">
        <p className="text-xs py-2 px-4 md:text-sm text-center text-hover-text dark:text-text-secondary mb-0">
          {t('headerTitle')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="mx-auto flex items-center justify-between py-2 px-4">
        <button onClick={()  => handleNavigation('/profile/#home')} className="flex-shrink-0">
          <img
            src={`/assets/images/logos/Logo${
              currentTheme === 'dark' ? 'Dark' : 'Light'
            }.svg`}
            alt="Logo"
            className="w-[6em]"
          />
        </button>

        <div className="hidden lg:flex">
          <NavbarDesktop />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitch />
            <SelectLanguage />
          </div>
          <NavLink
            to="/contact"
            className="hidden lg:flex justify-center items-center font-sub-heading text-lg gap-2 lg:text-xl font-medium border-2 rounded-lg border-btn-bg px-3 py-1 md:px-4 md:py-2 text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary"
          >
            <Icon icon="line-md:email-twotone" width="24" height="24" />{' '}
            {t('contact')}
          </NavLink>

          <div className="lg:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
