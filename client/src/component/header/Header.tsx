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
  const [scrollY, setScrollY] = useState(0);
  let lastScrollY = window.scrollY;

  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if the scroll position is greater than 121px
      if (window.scrollY > 121) {
        setHeaderVisible(window.scrollY < lastScrollY);
      } else {
        setHeaderVisible(true); // Show header if above 121px
      }

      // Update last scroll position
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-transform duration-300 
        ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        
      <div className={`bg-bg-primary transition-transform duration-300`}>
        <p className='pt-2 pb-2 text-text-secondary mb-0 text-sm leading-normal text-center'>
          {t('headerTitle')}
        </p>
      </div>

      <nav className={` mx-auto flex justify-between py-2 px-4 md:px-8 2xl:px-20 transition-transform duration-300 
        ${headerVisible ? 'translate-y-0' : '-translate-y-full'} 
        backdrop-blur-[100px] ${scrollY > 0 ? "dark:bg-[url('/assets/images/bg-dark-img.jpg')] dark:opacity-90 object-cover w-full" : "dark:bg-[url('/assets/images/bg-dark-img.jpg')] w-full object-cover"}`}>
        
        <NavLink to='/'>
          {currentTheme === 'dark' ? (
            <img src='/assets/images/logos/LogoDark.svg' alt='Logo' className='h-16 w-auto' />
          ) : (
            <img src='/assets/images/logos/LogoLight.svg' alt='Logo' className='h-16 w-auto' />
          )}
        </NavLink>

        <div className="hidden md:flex">
          <NavbarDesktop />
        </div>

        <div className='flex items-center gap-4 lg:gap-6'>
          <ThemeSwitch />
          <SelectLanguage />
          <NavLink to='/contact' className={`hidden cursor-pointer text-lg md:block border-2 rounded-full border-accent-secondary px-4 py-2 text-accent-secondary hover:bg-accent-primary hover:border-accent-primary hover:text-hover-text
            hover:opacity-100`}>
            {t('contact')}
          </NavLink>
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
