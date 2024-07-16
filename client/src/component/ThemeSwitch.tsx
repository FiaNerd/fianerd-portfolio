import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeContext from '../context/ThemeContext'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`flex flex-col `}>
      <button
        data-testid='switch-theme-btn'
        onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
        className='p-2 rounded-full focus:outline-none'>
        {/* Conditional rendering for the icon */}
        <FontAwesomeIcon
          icon={currentTheme === 'light' ? faSun : faMoon}
          className='text-center'
        />
         {/* <p className='text-sm'> */}
          {/* {currentTheme === 'light' ? 'ljust läge' : 'mörkt läge'} */}
        {/* </p>  */}
      </button>
    </div>
  )
}

export default ThemeSwitch
