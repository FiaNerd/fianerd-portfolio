import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setIsOpen(false))

  return (
    <div ref={ref} className='lg:hidden'>
      <div className='z-50'>
        <Hamburger toggled={isOpen} size={40} toggle={setIsOpen} />
      </div>

      {isOpen && (
        <div className='fixed h-full bg-dark-green left-0 lg:shadow-4xl right-0 pt-5 '>
          <ul className='grid gap-12'>
            {navRoutes.map((menu, index) => {
              return (
                <MenuItems
                  key={index}
                  items={{ ...menu, subMenu: menu.subMenu || [] }}
                  depthLevel={0}
                />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavbarMobile
