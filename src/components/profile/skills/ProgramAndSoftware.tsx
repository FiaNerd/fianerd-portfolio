import { useTranslation } from 'react-i18next';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';
const ProgramAndSoftware = () => {
  const { t } = useTranslation('profile/skills');

  const fadeInDown = useFadeIn({ direction: 'down', delay: 0.5, duration: 1 });

  return (
    <motion.div
      ref={fadeInDown.ref}
      initial="hidden"
      animate={fadeInDown.ctrls}
      variants={fadeInDown.vars}
      className="max-w-screen-2xl mx-auto py-12 px-4"
    >
      <div className="items-center md:row-start-2 md:col-start-1 mb-20">
        <h2 className="text-[#035d44] dark:text-[#a05a48] mb-0 font-textImportant text-4xl md:text-5xl font-bold text-center md:leading-[3rem]">
          {t('programsAndSoftwares.programsAndSoftwareTitleProgram')}
        </h2>
        <h3 className="text-text-secondary font-light text-center">
          {t('programsAndSoftwares.programsAndSoftwareSubTitleProgram')}
        </h3>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2 gap-x-6 gap-y-2 text-center mb-12 jusity-center">
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4 ">
          {t('programsAndSoftwares.visualStudio').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.visualStudio').split('-')[1]}
          </span>
        </p>

        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4 ">
          {t('programsAndSoftwares.visualStudioCode').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.visualStudioCode').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.terminal').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.terminal').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.git').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.git').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.dataRequest').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.dataRequest').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.ux/ui').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.ux/ui').split('-')[1]}
          </span>
        </p>

        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] py-2 outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 md:py-4 px-4">
          {t('programsAndSoftwares.photoshop').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.photoshop').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 [#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.illustrator').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.illustrator').split('-')[1]}
          </span>
        </p>
        <p className="font-textImportant text-2xl text-[#035d44] dark:text-[#a05a48] outline-dashed outline-2 outline-[#035d44] dark:outline-[#a05a48] outline-offset-4 py-2 md:py-4 px-4">
          {t('programsAndSoftwares.inDesign').split('-')[0]}
          <span className="font-sub-heading text-xl text-text-secondary">
            {t('programsAndSoftwares.inDesign').split('-')[1]}
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default ProgramAndSoftware;
