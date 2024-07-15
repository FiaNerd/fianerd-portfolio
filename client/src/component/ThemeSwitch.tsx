import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../context/ThemeContext'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={`flex flex-col ${
        theme === 'dark' ? 'text-white' : 'text-dark'
      }`}>
      <button
        onClick={toggleTheme}
        className='p-2 rounded-full focus:outline-none'>
        {/* Conditional rendering for the icon */}
        <FontAwesomeIcon
          icon={theme === 'dark' ? faSun : faMoon}
          className='text-center'
        />
        <p className='text-sm'>
          {theme === 'dark' ? 'ljust läge' : 'mörkt läge'}
        </p>
      </button>
    </div>
  )
}

export default ThemeSwitch
