import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import Button from "../Partial/Button";
import Section from "../Partial/Section";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");
  const [ isVisible, setIsVisible ] = useState(false);

  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });


  return (
    <Section bgColor="bg-bg-plate">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 p-4 md:gap-10 md:grid-cols-2">
        <div>
          <img src="/assets/images/me.jpeg" alt="Fia nerd" />
        </div>
        <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="flex flex-col">
        <h2>{t('title')}</h2>
        <p>{t('intro')}</p>
        { isVisible && (
          <>
           <p>{t('bio')}</p>
          </>
        )}
   
          <Button className="text-xl text-accent-primary hover:text-accent-secondary text-end" onClick={() => setIsVisible(!isVisible)}>{t('cta')}</Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutMe;
