import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { navRoutsAbout } from "../../config/MenuAboutMeData";
import useAnimateIn from "../../hook/useAnimation";
import Section from "../Partial/Section";

const AboutNav = () => {
    const { t } = useTranslation('home');
    const { ref, ctrls, vars } = useAnimateIn({
        duration: 0.95,
    });

    return (
        <Section id="me">
            <ul className="max-w-[1200px] flex flex-wrap gap-6 md:gap-20 justify-center mx-auto mb-12">
                {navRoutsAbout.map((item) => {
                    // Use your custom hook for each nav item

                    return (
                        <motion.li 
                            ref={ref} 
                            initial="hidden" 
                            animate={ctrls} 
                            variants={vars} 
                            key={item.title} 
                            className="flex"
                        >
                            <NavLink
                                to={item.url}
                                className="text-base font-medium md:text-lg lg:text-xl font-heading text-text-primary hover:underline hover:text-accent-secondary hover:underline-offset-8 focus:underline focus:underline-offset-8 focus:text-accent-secondary"
                            >
                                {t(item.title)}
                            </NavLink>
                        </motion.li>
                    );
                })}
            </ul>
        </Section>
    );
}

export default AboutNav;
