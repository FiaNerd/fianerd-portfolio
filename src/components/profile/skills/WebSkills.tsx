import { useTranslation } from 'react-i18next';
import ProgressBar from './ProgressBar';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';
import Techstack from './Techstack';
import { Icon } from '@iconify/react';

const WebSkills = () => {
  const { t } = useTranslation('profile/skills');

  const webSkills = [
    { name: 'ASP.Net Core', icon: 'skill-icons:dotnet' },
    { name: 'Sql Server', icon: 'devicon:microsoftsqlserver' },
    { name: 'React', icon: 'devicon:react' },
    { name: 'TypeScript', icon: 'devicon:typescript' },
    {
      name: 'HTML',
      icon: 'devicon:html5',
    },
    {
      name: 'CSS',
      icon: 'logos:css-3',
    },
    {
      name: 'Tailwind CSS',
      icon: 'logos:tailwindcss-icon',
    },
    { name: 'Node js', icon: 'devicon:nodejs' },
    { name: 'Git / terminal', icon: 'devicon:git' },
  ];

  // Animations for the image and text
  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <section className="max-w-screen-2xl mx-auto top-0 left-0 px-4 md:px-6 lg:px-10 py-8 md:py-12">
      <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8">
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="items-center md:row-start-2 md:col-start-1"
        >
          <h2 className="font-textImportant text-3xl md:text-5xl text-[#535437] dark:text-[#489c80] leading-10 font-bold text-center md:leading-[3rem]">
            {t('webSkills.titleCode')}
          </h2>
          <h3 className="text-text-secondary font-light leading-3 text-center">
            {t('webSkills.subTitleWebDev')}
          </h3>
        </motion.div>

        <motion.div
          ref={fadeInRight.ref}
          initial="hidden"
          animate={fadeInRight.ctrls}
          variants={fadeInRight.vars}
          className="items-center md:row-start-2 md:col-start-2"
        >
          <h1 className="font-textImportant text-3xl md:text-5xl text-[#535437] dark:text-[#489c80] font-bold text-center mb-2">
            {t('webSkills.titleWeb')}
          </h1>
          <h3 className="text-center text-text-secondary not-italic font-light">
            {t('webSkills.titleWebDev')}
          </h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:order-0 lg:grid-cols-[6%_auto_50%] gap-4 mb-8">
        {/* Vertical Text Column */}
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="hidden lg:flex items-center justify-center"
        >
          {/* Added pr-8 for padding-right */}
          <h1 className="uppercase font-semibold whitespace-pre-line text-[#535437] dark:text-[#489c80] tracking-widest transform rotate-180 [writing-mode:vertical-lr] text-center">
            {t('webSkills.webbDev')}
          </h1>
        </motion.div>
        {/* Skills Column */}
        <motion.div
          ref={fadeInRight.ref}
          initial="hidden"
          animate={fadeInRight.ctrls}
          variants={fadeInRight.vars}
          className=""
        >
          <h4 className="text-text-secondary font-semibold mb-[0.15em]">
            Frontend
          </h4>
          {webSkills.map((skill) => (
            <div
              className=" justify-center items-center gap-2 p-2 rounded-lg  hover:scale-105 transition-transform duration-300"
              key={skill.name}
            >
              <Techstack name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </motion.div>

        {/* Middle Column */}
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="sm:col-span-1 order-last lg:order-none md:pr-8"
        >
          <p className="italic font-medium underline decoration-wavy text-center underline-offset-8 derocation-text-secondary dark:decoration-text-secondary text-md md:text-2xl md:mb-8 text-[#535437] dark:text-[#489c80]">
            {t('webSkills.textTitleDevGoal')}
          </p>
          <h5
            className="text-text-secondary not-italic mb-0"
            dangerouslySetInnerHTML={{ __html: t('webSkills.titleBE') }}
          ></h5>
          <p dangerouslySetInnerHTML={{ __html: t('webSkills.textBE') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('webSkills.textDB') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('webSkills.textAzure') }}></p>
          <h5
            className="text-text-secondary not-italic mb-0"
            dangerouslySetInnerHTML={{ __html: t('webSkills.titleFE') }}
          ></h5>
          <p
            className="text-text-primary"
            dangerouslySetInnerHTML={{ __html: t('webSkills.textFE') }}
          ></p>
          <p
            className="text-text-primary"
            dangerouslySetInnerHTML={{ __html: t('webSkills.textVue') }}
          ></p>
          <p
            className="text-text-primary"
            dangerouslySetInnerHTML={{ __html: t('webSkills.textCMS') }}
          ></p>
          <p
            className="text-text-primary mb-12"
            dangerouslySetInnerHTML={{ __html: t('webSkills.textAzure') }}
          ></p>
          <p className="text-text-secondary font-sub-heading outline-dashed outline-2 outline-text-secondary dark:outline-text-[#489c80] outline-offset-4 italic font-normal py-2 px-4 p-2 rounded">
            {t('webSkills.textGoal')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebSkills;
