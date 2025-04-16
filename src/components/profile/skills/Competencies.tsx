import { useTranslation } from 'react-i18next';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';

const Competencies = () => {
  const { t } = useTranslation(['profile/skills']);

  const fadeInDown = useFadeIn({ direction: 'down', delay: 0.5, duration: 1 });

  return (
    <motion.div
      ref={fadeInDown.ref}
      initial="hidden"
      animate={fadeInDown.ctrls}
      variants={fadeInDown.vars}
      className="max-w-screen-2xl mx-auto px-4 "
    >
      <h2 className="text-[#bc3a08] dark:text-[#69864e] font-textImportant text-4xl md:text-5xl mb-2 leading-none font-bold text-center md:leading-[3rem]">
        {t('otherSkills.otherSkillsTitleLanguageAndDriving')}
      </h2>
      <h3 className="text-text-secondary font-light mb-12 leading-3 md:leading-none text-center">
        {t('otherSkills.otherSkillsSubTitleLanguageAndDriving')}
      </h3>

      <div className="sm:col-span-1 md:pr-8 flex flex-col text-center">
        <p className="text-text-sub-heading not-italic text-text-secondary">
          <span className="font-medium text-[#bc3a08] dark:text-[#69864e] font-sub-heading inline tracking-wider">
            {t('otherSkills.otherSkillsSwedishTitle').split(':')[0]}:
          </span>
          {t('otherSkills.otherSkillsSwedishTitle').split(':')[1]}
        </p>
        <p className="not-italic text-text-secondary">
          <span className="font-medium text-[#bc3a08] dark:text-[#69864e] font-sub-heading inline">
            {t('otherSkills.otherSkillsEnglishTitle').split(':')[0]}:
          </span>
          {t('otherSkills.otherSkillsEnglishTitle').split(':')[1]}
        </p>
        <p className="not-italic text-text-secondary mb-12">
          <span className="font-medium text-[#bc3a08] dark:text-[#69864e] font-sub-heading inline">
            {t('otherSkills.otherSkillsDrivingTitle').split(':')[0]}:
          </span>
          {t('otherSkills.otherSkillsDrivingTitle').split(':')[1]}
        </p>
      </div>
    </motion.div>
  );
};

export default Competencies;
