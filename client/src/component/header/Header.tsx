import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar'
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch'

const Header = () => {
  return (
    <>
      <header className="mb-8">
        <div className='font-title text-xl h-[5.4em] flex flex-row-4 items-center justify-between sticky'>
          <NavLink to={'/'} className='px-4'>
            <h1 className='text-5xl font-bold'>[ FIA NERD ]</h1>
            <p className='font-sub-title font-bold tracking-wider'>
              Sofia Mattiasson
            </p>
          </NavLink>

           <Navbar />


          <div className='flex gap-6 p-4'>
             <ThemeSwitch /> 
            
            <div className='flex flex-row gap-2 items-center'>
              <FontAwesomeIcon icon={faGlobe} className='text-center' />
              <div className='flex flex-row items-center'>
                <p className='text-md'>SV</p>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className='ml-1 h-[0.8em] text-center font-bold'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
