import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Route } from '../../config/MenuItemsData'

interface MenuItemsProps {
  items: Route
  depthLevel: number
  closeMenu: () => void
}

const MenuItems: React.FC<MenuItemsProps> = ({
  items,
  depthLevel,
  closeMenu,
}) => {
  const [dropdown, setDropdown] = useState(false)
  const { t } = useTranslation()

  const handleMouseEnter = () => {
    setDropdown(true)
  }

  const handleMouseLeave = () => {
    setDropdown(false)
  }

  const handleButtonClick = () => {
    // Toggle dropdown if the item has a submenu
    if (items.subMenu && items.subMenu.length > 0) {
      setDropdown(prev => !prev)
    } else {
      // Close the entire menu
      closeMenu()
    }
  }

  return (
    <li
      className='relative group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {items.subMenu && items.subMenu.length > 0 ? (
        <>
          <button
            onClick={handleButtonClick} // Add onClick handler to toggle dropdown or close menu
            className={`btn-menu px-4 text-xl font-heading tracking-wider`}>
            {t(items.title)}{' '}
            {items.icon && (
              <FontAwesomeIcon
                icon={items.icon}
                className='ml-1 h-[0.8em] text-center'
              />
            )}
          </button>
          <DropdownMenu
            submenus={items.subMenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            closeMenu={closeMenu}
          />
        </>
      ) : (
        <NavLink
          to={items.url}
          className='btn-menu mt-6 px-4 py-4 font-heading tracking-wider text-xl'
          onClick={closeMenu}>
          {t(items.title)}
        </NavLink>
      )}
    </li>
  )
}

export default MenuItems