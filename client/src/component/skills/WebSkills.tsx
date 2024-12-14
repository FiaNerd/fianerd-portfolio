import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";

const WebSkills = () => {
    const {t} = useTranslation("skills")
     const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

  return (
    <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="grid grid-rows-2 md:grid-cols-2">
      <h1 className="text-text-sub-heading font-bold text-h1 whitespace-break-spaces leading-[2.8rem]">{t("skills:titleWeb")}</h1>
      <div>
      <h2 className="text-text-sub-heading font-bold text-h2 mb-0 ">{t('titleWebDev')}</h2>
      <h3 className="text-text-sub-heading font-bold text-h3 leading-[1rem]">{t('subTitleWebDev')}</h3>
      </div>
    </motion.div >
  );
};

export default WebSkills;