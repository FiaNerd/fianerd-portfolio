// src/components/CustomDropdown.tsx
import { useState } from 'react'
import { LANGUAGES } from '../constants/Languages'
import { useTranslation } from 'react-i18next'

const CustomDropdown = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code)
    setSelectedLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className='dropdown-container z-90'>
      <button className='dropdown-button' onClick={toggleDropdown}>
        {LANGUAGES.find((lang) => lang.code === selectedLanguage)?.label ||
          'Select Language'}
        <span className='dropdown-arrow'>&#9660;</span>
      </button>
      {isOpen && (
        <div className='dropdown-menu'>
          {LANGUAGES.map(({ code, label }) => (
            <div
              key={code}
              className='dropdown-item text-sm'
              onClick={() => handleLanguageChange(code)}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
