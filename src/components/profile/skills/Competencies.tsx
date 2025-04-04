import { useTranslation } from 'react-i18next';

const Competencies = () => {
  const { t } = useTranslation(['profile/skills']);

  return (
    <section>
      <h1 className="text-center text-hover-text mb-8 text-2xl md:text-3xl lg:text-5xl bg-[#bc3a08] dark:bg-[#69864e] dark:text-[#4b1718] py-2 md:py-4 px-4 md:col-start-1 md:row-start-1">
        {t('otherSkills.otherSkillsTitle')}
      </h1>

      <h2 className="text-[#bc3a08] dark:text-[#69864e] font-textImportant text-4xl md:text-5xl mb-2 leading-none font-bold text-center md:leading-[3rem]">
        {t('otherSkills.otherSkillsTitleLanguageAndDriving')}
      </h2>
      <h3 className="text-text-secondary font-light mb-12 leading-3 md:leading-none text-center">
        {t('otherSkills.otherSkillsSubTitleLanguageAndDriving')}
      </h3>

      <div className="sm:col-span-1 md:pr-8 flex flex-col">
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
    </section>
  );
};

export default Competencies;
