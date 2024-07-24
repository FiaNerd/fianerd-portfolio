import { useRef, useState, useEffect, useContext } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import { navRoutes } from '../../config/MenuItemsData';
import MenuItems from './MenuItems';
import { AnimatePresence, motion } from 'framer-motion';
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
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            exit={{ opacity: 0, x: -100 }}
            className='mobile-menu fixed left-0 right-0 top-0 bottom-0 lg:shadow-4xl pt-6 pb-12 lg:pt-5 flex flex-col'
          >
            <button
              onClick={() => setShowMenu(false)}
              className='absolute top-4 right-4 z-50 text-white bg-black p-2 rounded-full'
            >
              X
            </button>
            <div className="flex-grow overflow-y-auto">
              <ul className='grid gap-6'>
                {navRoutes.map((menu, index) => (
                  <MenuItems
                    key={index}
                    items={{ ...menu, subMenu: menu.subMenu || [] }}
                    depthLevel={0}
                  />
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 flex flex-row gap-4 justify-center p-4 bg-gray-100">
              <p>Hej</p>
              <p>Hej</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
