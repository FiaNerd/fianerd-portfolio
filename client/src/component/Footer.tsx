import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='mobile-menu z-[-50] flex flex-row gap-8 justify-center items-center border-t'>
        <NavLink
          to='https://github.com/FiaNerd'
          target='_blank'
          className='btn-menu'>
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>
        <NavLink
          to='https://www.linkedin.com/in/sofia-mattiasson-fianerd/'
          target='_blank'
          className='btn-menu'>
          <FontAwesomeIcon icon={faLinkedin} />
        </NavLink>
        <NavLink to='mailto:fianerd.developer@gmail.com' className='btn-menu'>
          <FontAwesomeIcon icon={faEnvelope} className='btn-menu' />
        </NavLink>
      </div>
      <p className='font-heading text-sm mx-auto pb-4 mt-2'>
        &copy; FiaNerd | Sofia Mattiasson
      </p>
    </>
  )
}

export default Footer
