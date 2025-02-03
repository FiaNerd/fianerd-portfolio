import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface SvgLineProps {
    colorLight: string;
    colorDark: string;
}

const SvgLine = ({colorLight, colorDark}: SvgLineProps) => {
    const themeContext = useContext(ThemeContext);
    const currentTheme = themeContext?.currentTheme || "light"; 
    const isDark = currentTheme === "dark";
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path fill={isDark ? colorDark : colorLight} 
            fill-opacity="1" d="M0,0L1440,96L1440,320L0,320Z">
        </path>
    </svg>
)
}

export default SvgLine