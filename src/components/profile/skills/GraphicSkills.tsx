import { useTranslation } from 'react-i18next';
import ProgressBar from './ProgressBar';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';

const GraphicSkills = () => {
  const { t } = useTranslation('profile/skills');

  const skillsGraphic = [
    { name: 'PhotoShop', percentage: 80 },
    { name: 'Illustrator', percentage: 90 },
    { name: 'InDesign', percentage: 60 },
    { name: 'UX / UI', percentage: 40 },
  ];

  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-8 md:py-12">
      <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols- gap-8 md:gap-20 mb-8">
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="items-center md:row-start-2 md:col-start-1"
        >
          <h2 className="text-[#4b1718] font-textImportant dark:text-bg-secondary mb-4 leading-10 font-bold text-center md:leading-[3rem]">
            {t('graphicSkills.titleDesign')}
          </h2>
          <h3 className="text-text-secondary font-light leading-3 text-center">
            {t('graphicSkills.subTitleGraphic')}
          </h3>
        </motion.div>

        <motion.div
          ref={fadeInRight.ref}
          initial="hidden"
          animate={fadeInRight.ctrls}
          variants={fadeInRight.vars}
          className="items-center md:row-start-2 md:col-start-2"
        >
          <h2 className="text-[#4b1718] dark:text-bg-secondary font-textImportant text-center mb-2 whitespace-break-spaces">
            {t('graphicSkills.titleGraphic')}
          </h2>
          <h3 className="text-center text-text-secondary not-italic font-light whitespace-break-spaces ">
            {t('graphicSkills.titleGraphicSkills')}
          </h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[6%_50%_auto] gap-4 mb-8">
        {/* Vertical Text Column */}
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="items-center justify-center hidden lg:block pr-8"
        >
          <h1 className="text-[#4b1718] dark:text-bg-secondary font-semibold tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center ">
            {t('graphicSkills.graphicTitle').toUpperCase()}
          </h1>
        </motion.div>

        {/* Middle Column */}
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="sm:col-span-1 order-last lg:order-none md:pr-8 flex flex-col justify-between	"
        >
          <p className="italic font-medium font-sub-heading underline decoration-wavy text-[#4b1718] dark:text-bg-secondary dark:decoration-text-secondary underline-offset-8 mb-6">
            {t('graphicSkills.textTitleGraphicGoal')}
          </p>
          <p
            className="text-text-sub-heading not-italic"
            dangerouslySetInnerHTML={{ __html: t('graphicSkills.textPS') }}
          ></p>
          <p
            className="text-text-primary"
            dangerouslySetInnerHTML={{ __html: t('graphicSkills.textAI') }}
          ></p>
          <p
            className="text-text-primary"
            dangerouslySetInnerHTML={{ __html: t('graphicSkills.textID') }}
          ></p>
          <p
            className="text-text-primary mb-12"
            dangerouslySetInnerHTML={{ __html: t('graphicSkills.textUX/UI') }}
          ></p>
          <p className="text-[#4b1718] dark:text-text-secondary font-sub-heading outline-dashed outline-2 outline-[#4b1718] dark:outline-bg-secondary outline-offset-4 italic font-normal py-2 px-4 p-2 rounded">
            {t('graphicSkills.textGoal')}
          </p>
        </motion.div>

        {/* Skills Column */}
        <motion.div
          ref={fadeInRight.ref}
          initial="hidden"
          animate={fadeInRight.ctrls}
          variants={fadeInRight.vars}
          className="col-span-2 md:col-span-1 order-first lg:order-none"
        >
          {skillsGraphic.map((skill) => (
            <div key={skill.name}>
              <p className="text-text-secondary dark:text-text-secondary font-semibold mb-[0.15em]">
                {skill.name}
              </p>
              <ProgressBar percentage={skill.percentage} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GraphicSkills;
