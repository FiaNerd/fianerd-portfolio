import { navRoutes } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

const NavbarDesktop = () => {
  return (
    <nav className='py-2'>
      <ul className='hidden lg:flex lg:flex-row gap-12 justify-center'>
        {navRoutes.map((menu, index) => (
          <MenuItems
            key={index}
            items={{ ...menu, subMenu: menu.subMenu || [] }}
            depthLevel={0}
          />
        ))}
      </ul>
    </nav>
  )
}

export default NavbarDesktop
