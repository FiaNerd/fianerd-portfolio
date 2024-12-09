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
        <h2 className="text-h2 m-0 font-bold text-text-heading not-italic">{t('title')}</h2>
        <p className="italic">{t('intro')}</p>
        <p>{t('introBio')}</p>
        <h3 className="text-text-heading text-h3 font-bold not-italic">{t('myBackgroundTitle')}</h3>
        <p>{t('myBackgroundText')}</p>
        { isVisible && (
          <>
           <h3 className="text-h3 m-0 font-bold text-text-heading not-italic">{t('myJourneyTitle')}</h3>
           <p>{t('myJourneyText')}</p>
           <h4 className="text-h4 m-0 font-bold text-text-heading not-italic">{t('myFilosofiTitle')}</h4>
           <h4 className="text-h4 not-italic m-0">{t('myFilosofiSubtitle')}</h4>
           <p className="m-0">{t('myFilosofiText1')}</p>
           <p className="m-0">{t('myFilosofiText2')}</p>
           <p>{t('myFilosofiText3')}</p>
           <p>{t('myFilosofiText4')}</p>
           <h3 className="text-h3 font-bold text-text-tertiary">{t('createTogheterTitle')}</h3>
           <p>{t('createTogheterText')}</p>
          </>
        )}
   
          <Button className="text-xl text-accent-primary hover:text-accent-secondary text-end" onClick={() => setIsVisible(!isVisible)}>{t('cta')}</Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutMe;
