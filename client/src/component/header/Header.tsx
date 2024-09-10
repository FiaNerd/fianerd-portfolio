import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import SelectLanguage from '../SelectLanguage'
import ThemeSwitch from '../ThemeSwitch'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getClassName = ({ isActive }: any) =>
  `link ${isActive ? 'active contact' : ''}`

const Header = () => {
  const { t } = useTranslation('translation')

  return (
    <header className='w-full sticky top-0 mb-8 py-2 px-4 md:mb-12 '>
      <nav className='max-w-[1600px] mx-auto flex flex-row font-heading items-center justify-between sticky top-0 left-0 right-0'>
        <NavLink to='/'>
          <div className='flex flex-col'>
            <h1 className='text-lg md:text-4xl font-bold'>[ FIA NERD ]</h1>
            <p className='text-base font-sub-heading md:font-bold tracking-wider'>
              Sofia Mattiasson
            </p>
          </div>
        </NavLink>

        {/* NavbarDesktop Component */}
        <NavbarDesktop />

        <div className='flex items-center gap-4 lg:gap-6'>
          <ThemeSwitch />
          <div className='flex items-center'>
            <SelectLanguage />
          </div>
          <NavLink
            to='/contact'
            className={`${getClassName} hidden text-lg md:block border border-accent-primary px-4 py-2 rounded-sm text-accent-primary hover:bg-accent-secondary hover:border-accent-secondary hover:text-hover-text `}>
            {t('contact')}{' '}
          </NavLink>
          <NavbarMobile />
        </div>
      </nav>
    </header>
  )
}

export default Header
