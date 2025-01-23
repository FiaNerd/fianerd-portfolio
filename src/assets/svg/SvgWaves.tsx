import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface SvgWavesProps {
  colorLight: string; 
  colorDark: string; 
}

const SvgWaves = ({ colorLight, colorDark }: SvgWavesProps) => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme || "light"; 
  const isDark = currentTheme === "dark";

  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 100"
    width="100%" 
    height="auto"
  >
    <path
      fill={isDark ? colorDark : colorLight}
      fillOpacity="1"
      d="M0,32L60,26.7C120,21,240,11,360,16C480,21,600,43,720,42.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </svg>


  );
};

export default SvgWaves;
