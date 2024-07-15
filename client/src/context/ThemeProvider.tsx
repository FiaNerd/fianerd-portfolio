import { FC, ReactNode, useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"

const ThemeProvider: FC<{children: ReactNode}> = ({ children }) => {

  const getInitialTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('theme');
    
    return savedTheme === 'dark' ? 'dark' : 'light';
  };

  const [ theme, setTheme ] = useState<'light' | 'dark'>(getInitialTheme)

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme )
  }

  useEffect(() => {
    if(theme === 'light'){
      document.body.classList.remove('dark')
    }else{
      document.body.classList.add('dark')
    }
  })

 return <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export default ThemeProvider