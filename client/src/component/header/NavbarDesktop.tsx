import { useState } from 'react'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

const NavbarDesktop = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <nav className='py-2'>
      <ul className='hidden lg:flex lg:flex-row gap-12 justify-center '>
        {navRoutes.map((menu, index) => (
          <MenuItems
            key={index}
            items={{ ...menu, subMenu: menu.subMenu || [] }}
            depthLevel={0}
            closeMenu={handleCloseMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

export default NavbarDesktop
