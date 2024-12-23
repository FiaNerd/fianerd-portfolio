import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const SocialMediaAndContact = () => {
  return (
    <div className="flex flex-col justify-end h-screen w-[37px] md:w-[55px] space-y-4 pb-12 text-[0.8em] md:text-[0.9em] mx-auto z-1000">
      {/* Icons Section */}
      <div className="flex flex-col  space-y-8"> 
        <NavLink
          to="https://github.com/FiaNerd"
          target="_blank"
          className="flex flex-col cursor-pointer hover:opacity-70">
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>

        <NavLink
          to="https://www.linkedin.com/in/sofia-mattiasson-fianerd/"
          target="_blank"
          className="flex flex-col cursor-pointer hover:opacity-70">
          <FontAwesomeIcon icon={faLinkedin} />
        </NavLink>

        <NavLink
          to="mailto:fianerd.developer@gmail.com"
          className="flex flex-col cursor-pointer hover:opacity-70">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </div>

      {/* Decorative Line and Contact Text */}
      <div className="inline-block h-[2em] min-h-[1em] w-0.5 self-stretch mx-auto bg-amber-950 dark:bg-amber-100"></div>
      <p className='rotate-180 [writing-mode:vertical-lr] tracking-widest text-amber-950 dark:text-amber-100 mx-auto md:pt-12'>
        contact me
      </p>
    </div>
  );
};

export default SocialMediaAndContact;
