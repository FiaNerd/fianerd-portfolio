import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Arrow from '../assets/svg/Arrow';
import { useClickOutside } from '../hook/useClickOutside';

interface ISelectLanguageProps {
  onChange?: () => void;
}

const SelectLanguage = ({ onChange }: ISelectLanguageProps) => {
  const { i18n, t } = useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code); // Change the language in i18next
    localStorage.setItem('i18nextLng', code); // Persist the selected language
    setSelectedLanguage(code);
    setIsOpen(false); // Close the dropdown
  };

  const LANGUAGES = [
    { code: 'sv', label: t('languages.sv', 'Swedish') },
    { code: 'en', label: t('languages.en', 'English') },
  ];

  const selectedLanguageLabel =
    LANGUAGES.find((lang) => lang.code === selectedLanguage)?.label ||
    t('languages.select', 'Select');

  const dropdownItemClass = clsx(
    'bg-hover-text font-sub-heading text-[1.2rem] cursor-pointer',
    'py-2 px-4 hover:text-hover-text hover:bg-nav-text',
    'dark:text-text-primary dark:bg-bg-primary',
    'dark:hover:text-bg-primary dark:hover:bg-bg-secondary'
  );

  return (
    <div ref={ref} className="relative">
      <button
        aria-expanded={isOpen}
        className="flex flex-row items-center text-md font-sub-heading icon-language text-nav-text hover:text-nav-hover"
        onClick={toggleDropdown}
        onChange={onChange}
      >
        <Icon
          icon="ic:twotone-language"
          width="30"
          height="30"
          className="mr-[0.2em]"
        />
        <span className="text-xl flex items-center justify-center mt-0.5">
          {selectedLanguageLabel}
        </span>
        <Arrow navigationMenuOpen={isOpen} />
      </button>

      {isOpen && (
        <ul className="absolute z-100 mt-4 bg-white dark:bg-bg-primary shadow-lg rounded-md">
          {LANGUAGES.map(({ code, label }) => (
            <li
              key={code}
              className={dropdownItemClass}
              onClick={() => handleLanguageChange(code)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectLanguage;
