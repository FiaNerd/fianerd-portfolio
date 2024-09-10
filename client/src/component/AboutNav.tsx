import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { navRoutsAbout } from "../config/MenuAboutMeData";


const AboutNav = () => {
    const { t } = useTranslation('home');

  return (
    <ul className="flex flex-row gap-12 justify-center mb-12">
        {navRoutsAbout.map((item) => {
        return (
            <li key={item.title}>
                <NavLink to={item.url} className="text-[1.2rem] font-heading text-text-primary hover:underline hover:text-accent-primary hover:underline-offset-8 focus:underline focus:underline-offset-8 focus:text-accent-primary">{t(item.title)}</NavLink>
            </li>
        )
    })}</ul>
  )
}

export default AboutNav