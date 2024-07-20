import { useRef, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'
import { AnimatePresence, motion } from 'framer-motion'

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setShowMenu(false))

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
              className='fixed h-full bg-dark-purple left-0 lg:shadow-4xl right-0 pt-12 lg:pt-5'>
              <ul className='grid gap-12'>
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
  )
}

export default NavbarMobile
