import { AnimatePresence, motion } from 'framer-motion'
import { Sling as Hamburger } from 'hamburger-react'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { navRoutes } from '../../config/MenuItemsData'
import { ThemeContext } from '../../context/ThemeContext'; // Ensure this path is correct
import { useClickOutside } from '../../hook/useClickOutside'
import Footer from '../footer/Footer'
import MenuItems from './MenuItems'

const getClassName = ({ isActive }: { isActive: boolean }) =>
  `link ${isActive ? 'active contact' : ''}`

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation('translation')

  // Access the ThemeContext
  const context = useContext(ThemeContext)

  if (!context) {
    // Handle context not being available
    throw new Error('ThemeContext must be used within a ThemeProvider')
  }

  const { currentTheme } = context

  const ref = useClickOutside<HTMLDivElement>(() => setShowMenu(false))

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark');

    // Prevent background scrolling when the menu is open
    if (showMenu) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [currentTheme, showMenu]);



  return (
    <div ref={ref} className='lg:hidden relative'>
  
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
            className='h-screen bg-bg-secondary text-text-primary fixed left-0 right-0 top-0 bottom-0 sm:w-2/4 lg:shadow-4xl pt-4 pb-6 lg:pt-5 flex flex-col '>
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

            <div className='flex w-10/12 mt-8 mb-8 p-2 mx-auto border rounded-sm border-accent-primary hover:border-accent-primary hover:bg-accent-primary'>
              <NavLink
                to='/contact'
                className={`${getClassName} cursor mx-auto text-[1.2rem] text-accent-primary text-align lg:mb-0 hover:text-hover-text`}>
                {t('contact')}{' '}
              </NavLink>
            </div>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`z-50 ${
          showMenu
            ? 'fixed left-[12em] text-accent-primary'
            : 'text-text-primary'
        }`}
        style={{ right: '0', top: '1em',}}>
        <Hamburger toggled={showMenu} size={25} toggle={setShowMenu} />
      </div>

    </div>
  )
}

export default NavbarMobile
