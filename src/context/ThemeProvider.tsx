import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the theme context
interface ThemeContextType {
  currentTheme: 'light' | 'dark';
  toggleTheme: (theme: 'light' | 'dark') => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): 'light' | 'dark' => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  return savedTheme ? savedTheme : 'light';
};

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(getInitialTheme);

  const toggleTheme = (theme: 'light' | 'dark') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    if (currentTheme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext,  };
