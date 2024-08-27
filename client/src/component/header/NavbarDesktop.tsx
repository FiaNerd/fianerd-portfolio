import { useState } from 'react'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

const NavbarDesktop = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <nav className='hidden lg:flex lg:flex-row gap-8 justify-center py-2'>
        {navRoutes.map((menu, index) => (
          <MenuItems
            key={index}
            items={{ ...menu, subMenu: menu.subMenu || [] }}
            depthLevel={0}
            closeMenu={handleCloseMenu}
          />
        ))}
    </nav>
  )
}

export default NavbarDesktop
