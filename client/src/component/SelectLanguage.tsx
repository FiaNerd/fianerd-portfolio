import { LANGUAGES } from "../constants/Languages";

/* eslint-disable @typescript-eslint/no-explicit-any */

const SelectLanguage = () => {
  return (
    <select defaultValue={"sv"}> 
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
    </select>
  )
}

export default SelectLanguage