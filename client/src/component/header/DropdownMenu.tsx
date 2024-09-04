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
  const dropdownClass = newDepthLevel > 1 ? 'mt-2' : ''

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? 'block' : 'hidden'} ${
        newDepthLevel > 1 ? 'left-full top-0' : 'left-0 top-full'
      } lg:absolute no-wrap bg-bg-secondary align-middle py-2 lg:shadow-md rounded-sm lg:mt-0 ml-6 lg:ml-0 `}>
      {submenus.map((submenu, index) => (
        <li key={index} className='btn-profile relative'>
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
