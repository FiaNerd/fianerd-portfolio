import { useRef, useState, useEffect, useContext } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeContext from '../../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef(null)

  const { currentTheme } = useContext(ThemeContext)

  useClickAway(ref, () => setShowMenu(false))

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark')
  }, [currentTheme])

  return (
    <div ref={ref} className='lg:hidden relative'>
      {/* Hamburger Menu Button */}
      <div className='absolute z-50' style={{ right: '0.63em' }}> 
        <Hamburger toggled={showMenu} size={40} toggle={setShowMenu} />
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
            className='mobile-menu fixed left-0 right-0 top-0 bottom-0 lg:shadow-4xl pt-4 pb-6 lg:pt-5 flex flex-col z-40'>

            <div className='flex-grow overflow-y-auto mt-[4em]'>
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
            <div className='flex-shrink-0 flex flex-row gap-4 justify-center p-4 bg-gray-100'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavbarMobile
