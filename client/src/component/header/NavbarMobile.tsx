// src/components/NavbarMobile.tsx
import { useRef, useState, useEffect, useContext } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeContext from '../../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavbarMobile = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  const ref = useRef(null)

  const { currentTheme } = useContext(ThemeContext)

  useClickAway(ref, () => setShowMenu(false))

  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark')
  }, [currentTheme])

  return (
    <div ref={ref} className='lg:hidden relative'>
      {/* Hamburger Menu Button */}
      <div
        className={`z-50  ${showMenu ? 'fixed left-[12em] top-0' : 'absolute '}`}
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
            className='mobile-menu fixed left-0 right-0 top-0 bottom-0 lg:shadow-4xl pt-4 pb-6 lg:pt-5 flex flex-col '>
            <div className='flex-grow overflow-y-auto mt-[4em]'>
              <ul className='grid gap-6'>
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
            <div className='flex-shrink-0 flex flex-row gap-4 justify-center items-center p-4 border-t'>
              <NavLink to='https://github.com/FiaNerd' target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
              <NavLink
                to='https://www.linkedin.com/in/sofia-mattiasson-fianerd/'
                target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>
              <NavLink
                to='mailto:fianerd.developer@gmail.com'
                className='btn-menu'>
                <FontAwesomeIcon icon={faEnvelope} className='btn-menu' />
              </NavLink>
            </div>
            <p className='font-heading text-sm mx-auto'>
              &copy; FiaNerd | Sofia Mattiasson
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavbarMobile
