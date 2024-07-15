import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch'

const Header = () => {
  return (
    <>
      <header>
        <div className='font-title text-xl h-[5.4em] flex flex-row-4 justify-between sticky'>
          <NavLink to={'/'} className=' pt-4 px-4'>
            <h1 className='text-5xl font-bold'>[ FIA NERD ]</h1>
            <p className='font-sub-title font-bold tracking-wider'>
              Sofia Mattiasson
            </p>
          </NavLink>

          <div className='flex gap-4 p-4 items-center'>
         
             <ThemeSwitch /> 
            
            <div className='flex flex-col'>
              <FontAwesomeIcon icon={faGlobe} className='text-center' />
              <p className='text-sm'>Svenska</p>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header
