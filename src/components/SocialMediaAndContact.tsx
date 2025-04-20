import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const SocialMediaAndContact = () => {
  const { t } = useTranslation('translation');
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { currentTheme } = themeContext;

  const isDarkMode = currentTheme === 'dark';

  return (
    <div className="sidebar h-screen flex flex-col justify-between w-[37px] md:w-[55px] mx-auto pt-12 px-[0.23em]">
      {/* Logo Section */}
      <div className="flex justify-start ">
        <NavLink to="/profile/#home">
          <img
            src={
              isDarkMode
                ? '/assets/images/logos/logo-icon-light.svg'
                : '/assets/images/logos/logo-icon-dark.svg'
            }
            alt="Logo"
            className="w-[8em] md:w-[7em]" // Match the width and height to the icon size
          />
        </NavLink>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-2 md:text-[1.5em] mx-auto z-1000">
        {/* Icons Section */}
        <div className="flex flex-col space-y-3 ">
          <NavLink
            to="https://github.com/FiaNerd"
            target="_blank"
            className="flex flex-col cursor-pointer hover:opacity-70"
          >
            <Icon icon="jam:github" className="mx-auto text-2xl md:text-3xl" />
          </NavLink>

          <div className="inline-block min-h-[2em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent"></div>

          <NavLink
            to="https://www.linkedin.com/in/sofia-mattiasson-fianerd/"
            target="_blank"
            className="flex flex-col cursor-pointer hover:opacity-70"
          >
            <Icon icon="bi:linkedin" className="mx-auto text-xl md:text-2xl" />
          </NavLink>

          <div className="inline-block min-h-[2em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent"></div>

          <NavLink
            to="/contact"
            className="flex flex-col cursor-pointer hover:opacity-70"
          >
            <Icon
              icon="streamline:mail-send-envelope-solid"
              className="mx-auto text-xl md:text-2xl"
            />
          </NavLink>
        </div>

        {/* Decorative Line and Contact Text */}
        <div className="inline-block h-[2em] min-h-[1em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent"></div>
        <p className="rotate-180 [writing-mode:vertical-lr] tracking-widest text-text-secondary dark:text-text-accent mx-auto text-xs md:text-sm lg:text-base">
          {t('contact')}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaAndContact;
