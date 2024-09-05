import NavbarDesktop from './NavbarDesktop'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch'
import NavbarMobile from './NavbarMobile'
import SelectLanguage from '../SelectLanguage'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getClassName = ({ isActive }: any) =>
  `link ${isActive ? 'active contact' : ''}`

const Header = () => {
  const { t } = useTranslation('translation')

  return (
    <header className='mb-8 md:mb-12 h-[3.4em] py-2'>
      <nav className='flex flex-row font-heading items-centerlg:border-b justify-between sticky top-0 left-0 right-0'>
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
            className={`${getClassName} hidden md:block border  px-4 py-2 rounded-sm border-accent-primary text-accent-primary hover:bg-accent-primary hover:border-accent-primary hover:text-bg-primary text-lg`}>
            {t('contact')}{' '}
          </NavLink>
          <NavbarMobile />
        </div>
      </nav>
    </header>
  )
}

export default Header
