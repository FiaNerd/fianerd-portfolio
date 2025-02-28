import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface SvgArrowLineProps {
  colorDark?: string;
  colorLight?: string;
  direction?: "left" | "right";
  strokeWidth?: number;
  className?: string;
}

const SvgArrowLine = ({
  colorDark = "#000000",
  colorLight = "#FFFFFF",
  direction = "right",  
  strokeWidth = 6,
  className,
}: SvgArrowLineProps) => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme || "light";

  const isDark = currentTheme === "dark";
  const color = isDark ? colorDark : colorLight;

  const transform = direction === "left" ? "rotate(180 175 47.5)" : "";

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="100"
      viewBox="0 0 350 95"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-full ${className}`}
    >
      <g
        transform={`translate(0,95) scale(0.100000,-0.100000) ${transform}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      >
        <path d="M102 830 c-39 -36 -18 -120 29 -120 16 0 20 -6 18 -27 -1 -16 -1 -44 -1 -64 l2 -36 68 -8 c116 -12 185 -13 246 -3 40 6 62 6 69 -1 14 -14 203 -13 334 2 69 9 104 9 107 2 2 -6 8 -6 16 1 23 22 -9 26 -113 15 -184 -19 -314 -23 -322 -11 -5 8 -42 10 -129 5 -66 -3 -152 -2 -191 2 l-70 8 -1 68 c-1 51 1 67 11 63 15 -5 35 12 35 31 0 9 -9 8 -36 -4 -34 -17 -36 -17 -50 2 -37 50 15 88 62 44 23 -22 24 -22 24 -2 0 49 -69 69 -108 33z"/>
        <path d="M940 559 c0 -4 196 -6 435 -5 433 3 434 2 437 -18 2 -17 10 -21 43 -20 22 0 57 4 78 8 32 7 36 6 31 -8 -5 -13 2 -16 42 -16 27 0 75 6 106 14 31 7 57 10 56 7 -2 -17 5 -19 34 -11 21 7 36 6 45 -2 9 -7 37 -9 82 -4 50 4 70 3 73 -6 3 -9 22 -10 79 -2 49 7 78 8 87 1 7 -5 32 -7 57 -5 25 3 48 2 50 -3 3 -4 12 -6 19 -3 27 10 107 11 96 0 -12 -12 -13 -29 -1 -22 4 3 2 -20 -5 -52 -15 -62 -11 -153 9 -242 12 -53 13 -51 12 73 -1 70 2 127 6 127 11 0 18 94 7 108 -6 7 -6 12 -1 12 5 0 18 7 29 14 17 13 13 14 -45 10 -35 -2 -68 -7 -73 -10 -6 -4 -14 -1 -18 6 -6 9 -19 10 -60 1 -40 -9 -56 -8 -67 0 -10 9 -31 9 -85 0 -50 -8 -73 -9 -78 -1 -4 6 -37 9 -79 8 -48 -1 -75 3 -80 11 -6 9 -15 9 -36 1 -21 -8 -30 -8 -35 0 -5 8 -28 7 -83 -4 -99 -21 -128 -21 -120 0 5 13 -5 14 -80 8 -80 -6 -85 -5 -84 12 2 18 -14 19 -440 19 -244 0 -443 -3 -443 -6z"/>
        <path d="M2672 240 c-1 -16 2 -30 7 -30 5 0 12 -8 15 -18 8 -23 96 -119 116 -124 14 -4 117 109 113 124 -2 4 5 4 14 1 12 -5 15 -2 10 10 -3 9 -1 19 5 23 7 5 8 2 3 -6 -5 -8 -3 -11 5 -8 24 8 22 25 -2 23 -26 -1 -83 -51 -113 -99 -11 -18 -27 -32 -35 -31 -8 0 -39 36 -68 80 -29 44 -56 81 -60 83 -4 1 -9 -11 -10 -28z"/>
      </g>
    </svg>
  );
};

export default SvgArrowLine;