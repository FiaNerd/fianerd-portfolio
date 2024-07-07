import { faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='text-purple font-title text-xl h-[5em] flex flex-row-4 justify-between'>
      <h1 className='text-5xl font-bold p-4'>[ FIA NERD ]</h1>
      <div className='flex gap-4 p-4'>
        <div className='flex flex-col'>
          <FontAwesomeIcon icon={faMoon} className='text-center' />
          <p className="text-sm">Ljust läge</p>
        </div>
        <div className='flex flex-col'>
          <FontAwesomeIcon icon={faGlobe} className='text-center' />
          <p className="text-sm">Svenska</p>
        </div>
      </div>
    </div>
  )
}

export default Header
