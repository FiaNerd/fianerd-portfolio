import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '../hook/useClickOutside'; // Ensure this hook is defined properly

const SelectLanguage = () => {
  const { i18n, t } = useTranslation('translation')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  const toggleDropdown = () => setIsOpen(!isOpen)

  // Close dropdown when clicking outside
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code)
    setSelectedLanguage(code)
    setIsOpen(false)
  }

  // Define language options with translations for dropdown
  const LANGUAGES = [
    { code: 'sv', label: t('languages.sv') },
    { code: 'en', label: t('languages.en') },
  ]

  // Display short language code in header button
  const selectedLanguageLabel =
    LANGUAGES.find(
      (lang) => lang.code === selectedLanguage
    )?.code.toUpperCase() || 'Select'

  return (
    <div ref={ref}>
      {/* Dropdown button showing the short code */}
      <button
        className='text-md icon-language text-text-primary hover:text-accent-secondary dark:hover:text-bg-secondary'
        onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faGlobe} className='pr-2 text-[1.4rem]' />
        <span className='dropdown-arrow text-[1.1rem]'>
          {selectedLanguageLabel}
          <FontAwesomeIcon icon={faCaretDown} className='pl-[0.2em]'/>
        </span>
      </button>

      {/* Dropdown menu showing full language names */}
      {isOpen && (
        <ul className='absolute z-100'>
          {LANGUAGES.map(({ code, label }) => (
            <li
              key={code}
              className='bg-bg-primary text-[1.2rem] cursor-pointer text-text-primary hover:text-hover-text hover:bg-accent-secondary dark:hover:bg-bg-secondary py-2 px-4'
              onClick={() => handleLanguageChange(code)}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectLanguage
