
import { navRoutes } from '../../config/MenuItemsData'

import MenuItems from './MenuItems'


const Navbar = () => {
  return (
    <>
     <nav className='bg-purple py-2 mb-12'>
      <ul className="flex flex-row gap-12 justify-center">
        { navRoutes.map((menu, index) => {
          return(
              <MenuItems key={index} items={{ ...menu, subMenu: menu.subMenu || [] }} className="tracking-wider"/>
          )
        })}
      </ul>
     </nav>
    </>
  )
}

export default Navbar;
