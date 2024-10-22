import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-none text-text-primary flex flex-row place-content-evenly text-center border-t p-4'>

          <NavLink
            to='https://github.com/FiaNerd'
            target='_blank'
            className='flex flex-col gap-2 cursor-pointer hover:text-accent-secondary'>
            <FontAwesomeIcon icon={faGithub} />
            <span className='text-sm font-medium'>GitHub</span>
          </NavLink>

          <NavLink
            to='https://www.linkedin.com/in/sofia-mattiasson-fianerd/'
            target='_blank'
            className='flex flex-col gap-2 cursor-pointer hover:text-accent-secondary'>
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="text-sm font-medium">LinkedIn</span>
          </NavLink>

        
          <NavLink
            to='mailto:fianerd.developer@gmail.com'
            className='flex flex-col gap-2 cursor-pointer hover:text-accent-secondary'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="text-sm font-medium">e-mail</span>
          </NavLink>
      </div>
      <p className='font-heading text-text-primary text-sm mx-auto pb-4 mt-2'>
        &copy; FiaNerd | Sofia Mattiasson
      </p>
    </>
  )
}

export default Footer
