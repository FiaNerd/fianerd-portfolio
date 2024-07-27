import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarDesktop from './NavbarDesktop';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import NavbarMobile from './NavbarMobile';
import SelectLanguage from '../SelectLanguage';

// Function to handle active class
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getClassName = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`;

const Header = () => {
  return (
    <>
      <header className='mb-8 md:mb-12 h-[3.4em] py-2 lg:border-b'>
        <nav className='font-heading flex flex-row items-center justify-between sticky'>
          <NavLink to='/' className={getClassName}>
            <div className="flex flex-col">
              <h1 className='text-lg md:text-4xl font-bold'>[ FIA NERD ]</h1>
              <p className='text-base font-sub-heading md:font-bold tracking-wider'>
                Sofia Mattiasson
              </p>
            </div>
          </NavLink>

          <NavbarDesktop />

          <div className='flex gap-6'>
            <ThemeSwitch />

            <div className='flex flex-row gap-2 items-center'>
              <FontAwesomeIcon icon={faGlobe} className='text-center' />
              <div className='flex flex-row items-center'>
                <SelectLanguage />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className='ml-1 h-[0.8em] text-center font-bold'
                />
              </div>
            </div>
          </div>
        </nav>
        <div className='flex justify-end lg:hidden w-full'>
          <NavbarMobile />
        </div>
      </header>
    </>
  );
};

export default Header;
