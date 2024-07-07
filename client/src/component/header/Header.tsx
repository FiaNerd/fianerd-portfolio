import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar'
import { faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
      <div className='text-purple font-title text-xl h-[4em] flex flex-row-4 justify-between sticky'>
        <NavLink to={'/'}>
          <h1 className='text-5xl font-bold p-4'>[ FIA NERD ]</h1>
        </NavLink>

        <div className='flex gap-4 p-4 items-center'>
          <div className='flex flex-col'>
            <FontAwesomeIcon icon={faMoon} className='text-center' />
            <p className='text-sm'>Ljust läge</p>
          </div>
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
