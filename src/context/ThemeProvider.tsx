import React, { createContext, useState, useEffect } from 'react';

interface ThemeContextProps {
  currentTheme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};