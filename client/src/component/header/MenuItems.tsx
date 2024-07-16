import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu' // Adjust the import based on your directory structure
import { Route } from '../../config/MenuItemsData' // Adjust this import based on your data structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MenuItemsProps {
  items: Route
  depthLevel: number
}

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false)

  const handleMouseEnter = () => {
    setDropdown(true)
  }

  const handleMouseLeave = () => {
    setDropdown(false)
  }

  return (
    <li
      className='relative group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      {items.subMenu && items.subMenu.length > 0 ? (
        <>
          <NavLink
            className={`px-4 text-xl font-bold text-white font-title tracking-wider hover:text-gray-300`}
            to={items.url}>
            {items.title.toLocaleUpperCase()}{' '}
            {items.icon && (
              <FontAwesomeIcon
                icon={items.icon}
                className='ml-1 h-[0.8em] text-center'
              />
            )}
          </NavLink>
          <DropdownMenu
            submenus={items.subMenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <>
          <NavLink
            to={items.url}
            className='mt-6 px-4 py-4 font-title tracking-wider text-xl font-bold text-white hover:text-gray-300'>
            {items.title.toUpperCase()}
          </NavLink>
        </>
      )}
    </li>
  )
}

export default MenuItems
