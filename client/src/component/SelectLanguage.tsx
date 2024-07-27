// src/components/SelectLanguage.tsx
import React from 'react';
import { LANGUAGES } from "../constants/Languages";
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select defaultValue={i18n.language} onChange={handleChangeLanguage} className='select-language font-bold text-sm'>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
