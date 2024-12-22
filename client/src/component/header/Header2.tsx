import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import SelectLanguage from "../SelectLanguage";
import ThemeSwitch from "../ThemeSwitch";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header2 = () => {
    const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  let lastScrollY = window.scrollY;

  const { t } = useTranslation(['translation']);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.currentTheme;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > 121) {
        setHeaderVisible(window.scrollY < lastScrollY);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed top-0 left-0 transition-transform duration-300 ${
      headerVisible ? 'translate-y-0' : '-translate-y-full'
    } backdrop-blur-md bg-white/70 dark:bg-black/70`}
  >
      {/* Top Announcement Bar */}
      <div className="bg-orange-100 dark:bg-black">
        <p className="text-xs md:text-sm text-center py-2 text-amber-950 dark:text-amber-100">
          {t('headerTitle')}
        </p>
      </div>

     
    </div>
  );
};

export default Header2;