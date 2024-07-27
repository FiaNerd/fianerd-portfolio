import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeContext from '../context/ThemeContext'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`flex items-center`}>
      <button
        data-testid='switch-theme-btn'
        onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
        className='rounded-full focus:outline-none flex items-center'>
        {/* Conditional rendering for the icon */}
        <FontAwesomeIcon
          icon={currentTheme === 'light' ? faSun : faMoon}
          className='items-center text-sm'
        />
         {/* <p className='text-sm'> */}
          {/* {currentTheme === 'light' ? 'ljust läge' : 'mörkt läge'} */}
        {/* </p>  */}
      </button>
    </div>
  )
}

export default ThemeSwitch
