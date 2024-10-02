import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { navRoutsAbout } from "../../config/MenuAboutMeData";

const AboutNav = () => {
    const { t } = useTranslation('home');

    return (
        <section className="">
        <ul className="max-w-[1200px] flex flex-wrap gap-6 md:gap-20 justify-center mx-auto mb-12">
            {navRoutsAbout.map((item) => (
                <li key={item.title} className="flex">
                    <NavLink
                        to={item.url}
                        className="text-base font-medium md:text-lg lg:text-xl font-heading text-text-primary hover:underline hover:text-accent-primary hover:underline-offset-8 focus:underline focus:underline-offset-8 focus:text-accent-primary"
                    >
                        {t(item.title)}
                    </NavLink>
                </li>
            ))}
        </ul>
        </section>
    );
}

export default AboutNav;
