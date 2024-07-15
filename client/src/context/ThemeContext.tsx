import { createContext } from "react"

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  currentTheme: Theme
  toggleTheme: (newTheme: Theme) => void
}

 const defaultValue: ThemeContextProps = {
  currentTheme: 'light',
  toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextProps>(defaultValue)

export default ThemeContext