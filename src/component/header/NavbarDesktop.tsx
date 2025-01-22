import { Suspense } from 'react'
import NavigationMenu from './NavigationMenu'

const NavbarDesktop = () => {

  return (
    <div className='hidden font-bold text-sm lg:flex lg:flex-row items-baseline py-2'>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationMenu />
      </Suspense>
    </div> 
  )
}

export default NavbarDesktop
