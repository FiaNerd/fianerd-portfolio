import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitch must be used within a ThemeProvider');
  }

  const { currentTheme, toggleTheme } = themeContext;

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;

    if (!favicon) {
      console.error('Favicon element not found');
      return;
    }

    if (currentTheme === 'dark') {
      favicon.href = '/assets/images/logos/logo-icon-dark.svg'; 
    } else {
      favicon.href = '/assets/images/logos/logo-icon-light.svg'; 
    }
  }, [currentTheme]);

  return (
    <div className="flex items-center">
      <button
        data-testid="switch-theme-btn"
        onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}
        className="icon-language rounded-full cursor-pointer focus:outline-none flex items-center text-nav-text g:text-nav-text hover:text-nav-hover"
      >
        <FontAwesomeIcon
          icon={currentTheme === 'light' ? faSun : faMoon}
          className="items-center text-[1.4rem]"
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
