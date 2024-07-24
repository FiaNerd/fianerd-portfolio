import { useRef, useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import { navRoutes } from '../../config/MenuItemsData';
import MenuItems from './MenuItems';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  const { currentTheme } = useContext(ThemeContext);

  useClickAway(ref, () => setShowMenu(false));

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark');
  }, [currentTheme]);

  return (
    <div ref={ref} className='lg:hidden'>
      <div className='z-50'>
        <Hamburger toggled={showMenu} size={40} toggle={setShowMenu} />
      </div>
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              exit={{ opacity: 0, x: -100 }}
              className='mobile-menu fixed h-full left-0 lg:shadow-4xl right-0 pt-6 pb-12 lg:pt-5 overflow-y-auto'>
              <ul className='grid gap-6'>
                {navRoutes.map((menu, index) => (
                  <MenuItems
                    key={index}
                    items={{ ...menu, subMenu: menu.subMenu || [] }}
                    depthLevel={0}
                  />
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
