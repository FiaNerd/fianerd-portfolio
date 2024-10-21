import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import Button from "../Partial/Button";
import Section from "../Partial/Section";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

  useEffect(() => {
    console.log("In view: ",  ref, ctrls, vars);
  }, [ ref, ctrls, vars]);

  return (
    <Section bgColor="bg-bg-plate">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 p-4 md:gap-10 md:grid-cols-2">
        <img src="/assets/images/me.jpeg" alt="Fia nerd" />
        <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars}>
          <h2>{t('title')}</h2>
          <p>{t('intro')}</p>
          <p>{t('bio')}</p>
        </motion.div>
      </div>
      <Button>{t('cta')}</Button>
    </Section>
  );
};

export default AboutMe;
