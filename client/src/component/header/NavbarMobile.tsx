import { useState, useEffect, useContext } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { navRoutes } from '../../config/MenuItemsData';
import MenuItems from './MenuItems';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext'; // Ensure this path is correct
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import { useClickOutside } from '../../hook/useClickOutside';

const getClassName = ({ isActive }: { isActive: boolean }) =>
  `link ${isActive ? 'active contact' : ''}`;

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  // Access the ThemeContext
  const context = useContext(ThemeContext);

  if (!context) {
    // Handle context not being available
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { currentTheme } = context;

  const ref = useClickOutside(() => setShowMenu(false));

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark');
  }, [currentTheme]);

  return (
    <div ref={ref} className='lg:hidden relative'>
      <div
        className={`z-50 ${
          showMenu ? 'fixed left-[12em] top-0' : 'absolute '
        }`}
        style={{ right: '0', top: '1em' }}>
        <Hamburger toggled={showMenu} size={25} toggle={setShowMenu} />
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className='mobile-menu fixed left-0 right-0 top-0 bottom-0 sm:w-2/4 lg:shadow-4xl pt-4 pb-6 lg:pt-5 flex flex-col '>
            <div className='flex-grow overflow-y-auto mt-[3em]'>
              <ul className='grid gap-2'>
                {navRoutes.map((menu, index) => (
                  <MenuItems
                    key={index}
                    items={{ ...menu, subMenu: menu.subMenu || [] }}
                    depthLevel={0}
                    closeMenu={() => setShowMenu(false)}
                  />
                ))}
              </ul>
            </div>

            <NavLink
              to='/contact'
              className={`${getClassName} contact rounded-sm text-lg mx-auto text-align mb-8 lg:mb-0`}>
              {t('contact')}{' '}
            </NavLink>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
