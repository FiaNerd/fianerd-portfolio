import { useState } from 'react'
import NavigationMenu from './NavigationMenu'

const NavbarDesktop = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_showMenu, setShowMenu] = useState(false)

  // const handleCloseMenu = () => {
  //   setShowMenu(false)
  // }

  return (
    <div className='hidden font-bold text-sm lg:flex lg:flex-row items-baseline '>
        {/* {navRoutes.map((menu, index) => (
          <MenuItems
            key={index}
            items={{ ...menu, subMenu: menu.subMenu || [] }}
            depthLevel={0}
            closeMenu={handleCloseMenu}
          />
        ))} */}

        <NavigationMenu />
    </div>
  )
}

export default NavbarDesktop
