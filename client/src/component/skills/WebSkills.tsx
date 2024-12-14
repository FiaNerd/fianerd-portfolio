import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";

const WebSkills = () => {
    const { t } = useTranslation("skills");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

    return (
        <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="grid grid-rows-1 md:grid-cols-2 pl-4 pr-4">
            <h1 className="text-text-sub-heading font-bold text-center mb-8 whitespace-break-spaces leading-[2.8rem]">
                {t("skills:titleWeb")}
            </h1>
            <div>
                <h2 className="text-text-sub-heading font-bold text-center mb-0 ">{t('titleWebDev')}</h2>
                <h3 className="text-text-sub-heading font-bold text-center leading-[1rem]">{t('subTitleWebDev')}</h3>
            </div>
            <div className="whitespace-break-spaces	">
                <h4 className="text-center text-text-sub-heading not-italic font-bold">{t('textTitleGoal')}</h4>
                <h5 className="not-italic mb-0" dangerouslySetInnerHTML={{ __html: t('titleBE') }}></h5>
                <p dangerouslySetInnerHTML={{ __html: t('textBE') }}></p>
                <h5 className="not-italic mb-0" dangerouslySetInnerHTML={{__html: t('titleFE')}}></h5>
                <p dangerouslySetInnerHTML={{ __html: t('textFE') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('textCMS') }}></p>
                <p dangerouslySetInnerHTML={{ __html: t('textAzure') }}></p>
                <p className="italic font-light text-zinc-500	">{t('textGoal')}</p>
            </div>
        </motion.div>
    );
};

export default WebSkills;
