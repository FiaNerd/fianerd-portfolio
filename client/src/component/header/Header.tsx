/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import SelectLanguage from '../SelectLanguage'
import ThemeSwitch from '../ThemeSwitch'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const getClassName = ({ isActive }: any) =>
  `link ${isActive ? 'active contact' : ''}`

const Header = () => {
  const { t } = useTranslation('translation')
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <header
        className={`fixed w-full top-0 z-50 transition-transform duration-300 
        ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'} 
        backdrop-blur-[100px]`}>
        <nav className='max-w-[1600px] mx-auto flex flex-row font-heading items-center justify-between top-0 left-0 right-0 py-2 px-4 md:px-8'>
          <NavLink to='/'>
            <div className='flex flex-col'>
              <img
                src='/assets/images/logos/logo_light.svg'
                alt='Logo'
                className='h-16 w-auto' />
            </div>
          </NavLink>
      
   
          <div className="hidden md:flex">
            <NavbarDesktop />
          </div>

          <div className='flex items-center gap-4 lg:gap-6'>
            <ThemeSwitch />
            <div className='flex items-center'>
              <SelectLanguage />
            </div>

   
            <NavLink
              to='/contact'
              className={`${getClassName} hidden text-lg md:block border border-accent-primary px-4 py-2 rounded-sm text-accent-primary hover:bg-accent-secondary hover:border-accent-secondary hover:text-hover-text`}>
              {t('contact')}{' '}
            </NavLink>

              <NavbarMobile />
          </div>
        </nav>
       
      </header>
    </>
  )
}

export default Header
