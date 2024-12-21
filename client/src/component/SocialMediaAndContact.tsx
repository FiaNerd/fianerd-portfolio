import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const SocialMediaAndContact = () => {
  return (
    <div className="flex flex-col space-y-4 text-[0.8em] md:text-[1em]">
      <NavLink
        to="https://github.com/FiaNerd"
        target="_blank"
        className="flex flex-col gap-2 cursor-pointer hover:text-accent-secondary">
        <FontAwesomeIcon icon={faGithub} />
      </NavLink>

      <NavLink
        to="https://www.linkedin.com/in/sofia-mattiasson-fianerd/"
        target="_blank"
        className="flex flex-col gap-2 cursor-pointer hover:text-accent-secondary">
        <FontAwesomeIcon icon={faLinkedin} />
      </NavLink>

      <NavLink
        to="mailto:fianerd.developer@gmail.com"
        className="flex flex-col gap-2 cursor-pointer hover:text-accent-secondary">
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </div>
  );
};

export default SocialMediaAndContact;
