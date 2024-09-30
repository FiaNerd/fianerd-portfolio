import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitch must be used within a ThemeProvider');
  }

  const { currentTheme, toggleTheme } = themeContext;

  return (
    <div className="flex items-center">
      <button
        data-testid="switch-theme-btn"
        onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
        className="icon-language rounded-full cursor-pointer focus:outline-none flex items-center text-text-primary hover:text-accent-primary"
      >
        <FontAwesomeIcon
          icon={currentTheme === 'light' ? faSun : faMoon}
          className="items-center text-md"
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
