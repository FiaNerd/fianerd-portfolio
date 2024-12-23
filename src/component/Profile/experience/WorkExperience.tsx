import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../../hook/useFadeIn";
import Title from "../../Partial/Title";

const WorkExperience = () => {
    const { t } = useTranslation("workExperience");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });
    
  return (
    <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars}>
    <Title id="work" title={t("titleWorkExperience")} dot={t("dot")} children={t("subTitleWorkExperience")} />
    </motion.div>
  )
}

export default WorkExperience