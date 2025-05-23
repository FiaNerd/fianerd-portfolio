import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../config/MenuItemsData';
import { ThemeContext } from '../../context/ThemeContext';
import { useClickOutside } from '../../hook/useClickOutside';
import Footer from '../footer/Footer';
import SelectLanguage from '../SelectLanguage';
import ThemeSwitch from '../ThemeSwitch';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';
import MenuItemsMobile from './MenuItemsMobile';

const getClassName = ({ isActive }: { isActive: boolean }) =>
  `link ${isActive ? 'active contact' : ''}`;

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation('translation');

  // Access the ThemeContext
  const context = useContext(ThemeContext);

  if (!context) {
    // Handle context not being available
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const ref = useClickOutside<HTMLDivElement>(() => setShowMenu(false));

  useEffect(() => {
    // Prevent background scrolling when the menu is open
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  return (
    <div ref={ref} className="lg:hidden relative">
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
            className="h-screen bg-bg-primary text-text-accent dark:text-bg-primary fixed left-0 right-0 top-0 bottom-0 w-full flex flex-col z-50"
          >
            <div className="flex-grow overflow-y-auto mt-[3em]">
              <div className="flex gap-8 items-center p-4 mb-20">
                <ThemeSwitch />
                <SelectLanguage />
              </div>
              <ul className="grid gap-2 pl-8">
                {navRoutes.map((menu, index) => (
                  <MenuItemsMobile
                    key={index}
                    items={{ ...menu, subMenu: menu.subMenu || [] }}
                    depthLevel={0}
                    closeMenu={() => setShowMenu(false)}
                  />
                ))}
              </ul>
            </div>

            <div className="w-8/12 mt-8 mb-12 p-2 mx-auto border rounded text-btn-bg border-btn-bg hover:border-bg-hover hover:bg-bg-hover hover:text-bg-primary">
              <NavLink
                to="/contact"
                className={`${getClassName} flex flex-row items-center gap-4 justify-center font-sub-heading cursor mx-auto text-[1.2rem] text-align lg:mb-0 `}
                onClick={() => setShowMenu(false)}
              >
                <Icon icon="line-md:email-twotone" width="24" height="24" />{' '}
                {t('contact')}
              </NavLink>
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`z-50 ${
          showMenu
            ? 'fixed w-2/10 sm:w-2/12 text-accent-primary mr-4'
            : 'text-text-primary '
        }`}
        style={{ right: '0', top: '1em' }}
      >
        <AnimatedHamburgerButton isActive={showMenu} toggleMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default NavbarMobile;
