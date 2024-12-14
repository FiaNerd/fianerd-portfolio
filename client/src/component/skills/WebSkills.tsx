import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";

const WebSkills = () => {
    const { t } = useTranslation("skills");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

    return (
        <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className=" grid grid-row-2 md:grid-cols-2 gap-4 pl-4 pr-8">
          <div className="items-center">
            <h1 className="text-text-sub-heading mb-4 font-bold text-center mb-0 whitespace-break-spaces">
                {t("skills:titleWeb")}
            </h1>
                <h5 className="text-center text-text-sub-heading not-italic whitespace-break-spaces	font-bold">{t('textTitleGoal')}</h5>
          </div>
            <div>
                <h2 className="text-text-sub-heading mb-0 font-bold text-center leading-[2.5rem]">{t('titleWebDev')}</h2>
                <h3 className="text-text-sub-heading font-bold text-center">{t('subTitleWebDev')}</h3>
            </div>
            <div className="whitespace-break-spaces	">
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
