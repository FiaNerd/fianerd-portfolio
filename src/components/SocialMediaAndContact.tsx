import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className="h-screen flex flex-col justify-between w-[37px] md:w-[55px] mx-auto pt-12 px-[0.23em]">
      {/* Logo Section */}
      <div className="flex justify-start ">
        <NavLink to="/">
          <img
            src={isDarkMode ? "/assets/images/logos/logo-icon-light.svg" : "/assets/images/logos/logo-icon-dark.svg"}
            alt="Logo"
            className="w-[8em] md:w-[7em]" // Match the width and height to the icon size
          />
        </NavLink>
      </div>


    {/* Icons Section */}
      <div className="flex flex-col justify-end space-y-2 pb-20 md:pb-12 text-[0.8em] md:text-[0.9em] mx-auto z-1000">
        {/* Icons Section */}
        <div className="flex flex-col space-y-3"> 
          <NavLink
            to="https://github.com/FiaNerd"
            target="_blank"
            className="flex flex-col cursor-pointer hover:opacity-70">
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>

          <div className='inline-block  min-h-[1em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent'></div>
          
          <NavLink
            to="https://www.linkedin.com/in/sofia-mattiasson-fianerd/"
            target="_blank"
            className="flex flex-col cursor-pointer hover:opacity-70">
            <FontAwesomeIcon icon={faLinkedin} />
          </NavLink>

          <div className='inline-block  min-h-[1em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent'></div>
          
          <NavLink
            to="mailto:fianerd.developer@gmail.com"
            className="flex flex-col cursor-pointer hover:opacity-70">
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </div>

        {/* Decorative Line and Contact Text */}
        <div className="inline-block h-[2em] min-h-[1em] w-0.5 self-stretch mx-auto bg-text-secondary dark:bg-text-accent"></div>
        <p className='rotate-180 [writing-mode:vertical-lr] tracking-widest text-text-secondary dark:text-text-accent mx-auto md:pt-12'>
          {t("contact")}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaAndContact;
