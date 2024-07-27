import { Route } from '../../config/MenuItemsData'
import MenuItems from './MenuItems'

interface DropdownMenuProps {
  submenus: Route[]
  dropdown: boolean
  depthLevel: number
  closeMenu: () => void
}

const DropdownMenu = ({
  submenus,
  dropdown,
  depthLevel,
  closeMenu,
}: DropdownMenuProps) => {
  const newDepthLevel = depthLevel + 1
  const dropdownClass = newDepthLevel > 1 ? 'mt-4' : ''

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'block' : 'hidden'} ${
        newDepthLevel > 1 ? 'left-full top-0' : 'left-0 top-full'
      } lg:absolute no-wrap lg:py-4 lg:shadow-md rounded-sm mt-4 lg:mt-0 ml-6 lg:ml-0`}>
        
      {submenus.map((submenu, index) => (
        <li key={index} className='relative mb-4'>
          <MenuItems
            items={submenu}
            depthLevel={newDepthLevel}
            closeMenu={closeMenu}
          />
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
