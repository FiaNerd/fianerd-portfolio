import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = window.scrollY;

  const { t } = useTranslation(['translation']);

  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingUp(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 dark:bg-[url('/assets/images/bg-dark-img.jpg')] transition-transform duration-300 
      ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'} 
      backdrop-blur-[100px]`}
    >
      <div className='bg-bg-primary'>
        <p className='text-slate-300 pt-2 pb-2 text-text-primary mb-0 text-sm leading-normal text-center'>{t('headerTitle')}</p>
      </div>
      <nav className='max-w-[1600px] mx-auto flex justify-between py-2 px-4 md:px-8'>
        <NavLink to='/'>
          {currentTheme == 'dark' ? (
           
            <img
            src='/assets/images/logos/LogoDark.svg'
            alt='Logo'
            className='h-16 w-auto' 
          />
          ) : (
            <img
            src='/assets/images/logos/LogoLight.svg'
            alt='Logo'
            className='h-16 w-auto' 
          />

          )}
        </NavLink>

        <div className="hidden md:flex">
          <NavbarDesktop />
        </div>

        <div className='flex items-center gap-4 lg:gap-6'>
          {/* Pass the toggle function to ThemeSwitch */}
          <ThemeSwitch  />
          <SelectLanguage />
          <NavLink to='/contact' className='hidden cursor-pointer text-lg md:block border border-accent-primary px-4 py-2 rounded-sm text-accent-primary hover:bg-accent-secondary hover:border-accent-secondary hover:text-hover-text'>
            {t('contact')}
          </NavLink>
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
