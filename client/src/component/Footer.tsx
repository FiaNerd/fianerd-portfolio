import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-none flex flex-row place-content-evenly  items-center border-t p-2'>
        <div className='flex place-content-evenly '>
          <NavLink
            to='https://github.com/FiaNerd'
            target='_blank'
            className='btn-menu flex-col gap-2 cursor-pointer'>
            <FontAwesomeIcon icon={faGithub} />
            <p className="text-sm">GitHub</p>
          </NavLink>
        </div>

        <div className='flex'>
          <NavLink
            to='https://www.linkedin.com/in/sofia-mattiasson-fianerd/'
            target='_blank'
            className='btn-menu flex-col gap-2 cursor-pointer'>
            <FontAwesomeIcon icon={faLinkedin} />
            <p className="text-sm">LinkedIn</p>
          </NavLink>
        </div>
        
        <div className='flex'>
          <NavLink
            to='mailto:fianerd.developer@gmail.com'
            className='btn-menu flex-col gap-2 cursor-pointer'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text-sm">e-mail</p>
          </NavLink>
        </div>
      </div>
      <p className='font-heading text-sm mx-auto pb-4 mt-2'>
        &copy; FiaNerd | Sofia Mattiasson
      </p>
    </>
  )
}

export default Footer
