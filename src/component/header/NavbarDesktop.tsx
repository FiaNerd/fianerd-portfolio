import { useState } from 'react'
import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

const NavbarDesktop = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_showMenu, setShowMenu] = useState(false)

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <nav className='hidden font-bold lg:flex lg:flex-row gap-8 items-baseline py-2'>
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
