import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '../hook/useClickOutside'; // Ensure this hook is defined properly

const SelectLanguage = () => {
  const { i18n, t } = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  const ref = useClickOutside(() => setIsOpen(false));

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  // Define language options with translations for dropdown
  const LANGUAGES = [
    { code: 'sv', label: t('languages.sv') },
    { code: 'en', label: t('languages.en') },
  ];

  // Display short language code in header button
  const selectedLanguageLabel =
    LANGUAGES.find((lang) => lang.code === selectedLanguage)?.code.toUpperCase() || 'Select';

  return (
    <div className='dropdown-container z-90' ref={ref}>
      {/* Dropdown button showing the short code */}
      <button
        className='dropdown-button text-md icon-language'
        onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faGlobe} className='text-[1.60em] pr-2' />
        {selectedLanguageLabel}
        <span className='dropdown-arrow'>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </button>

      {/* Dropdown menu showing full language names */}
      {isOpen && (
        <div className='dropdown-menu'>
          {LANGUAGES.map(({ code, label }) => (
            <div
              key={code}
              className='dropdown-item-language text-sm'
              onClick={() => handleLanguageChange(code)}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
