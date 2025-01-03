import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Route } from '../../config/MenuItemsData'
import { useClickOutside } from '../../hook/useClickOutside'; // Import the custom hook
import Button from '../Partial/Button'
import DropdownMenu from './DropdownMenu'

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
  const { t } = useTranslation('translation')

  // Create a ref using the custom hook
  const ref = useClickOutside<HTMLLIElement>(() => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      setDropdown(false)
    }
  })

  const handleMouseEnter = () => {
    setDropdown(true)
  }

  const handleMouseLeave = () => {
    if (!items.subMenu || items.subMenu.length === 0) {
      setDropdown(false)
    }
  }

  const handleSubMenuMouseEnter = () => {
    setDropdown(true)
  }

  const handleSubMenuMouseLeave = () => {
    setDropdown(false)
  }

  const handleButtonClick = () => {
    // Toggle dropdown for the button that has a submenu
    if (items.subMenu && items.subMenu.length > 0) {
      setDropdown((prev) => !prev)
    } else {
      closeMenu()
    }
  }

  const renderLinkOrButton = () => {
    if (items.title.toLowerCase() === 'kontakt') {
      return (
        <Button
          onClick={handleButtonClick}
          className='px-12 font-sub-heading tracking-wider text-xl rounded-md'>
          <span dangerouslySetInnerHTML={{ __html: t(items.title) }} />
        </Button>
      )
    } else {
      return (
        <NavLink
          to={items.url}
          className='px-4 font-sub-heading tracking-wider text-xl hover:text-bg-secondary  focus:text-bg-secondary'
          onClick={closeMenu}>
          <span dangerouslySetInnerHTML={{ __html: t(items.title) }} />
        </NavLink>
      )
    }
  }

  return (
    <ul
      className='text-text-accent font-medium flex items-center space-x-4'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <li ref={ref} className='relative group '>
        {items.subMenu && items.subMenu.length > 0 ? (
          <>
            <button
              onClick={handleButtonClick}
              className='px-4 text-xl hover:text-accent-secondary dark:hover:text-bg-secondary tracking-wider '
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Trans>{t(items.title)}</Trans>
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
              onMouseEnter={handleSubMenuMouseEnter}
              onMouseLeave={handleSubMenuMouseLeave}
            />
          </>
        ) : (
          renderLinkOrButton()
        )}
      </li>
    </ul>
  )
}

export default MenuItems
