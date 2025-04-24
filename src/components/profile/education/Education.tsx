import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../partials/Button';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';
import { startTransition, useEffect } from 'react';

const Education = () => {
  const { t } = useTranslation('profile/education');
  const navigate = useNavigate();

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    startTransition(() => {
      navigate('/portfolio/my-work');
    });
  };

  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <section className="md:py-8">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start lg:flex-row md:mb-20">
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="flex flex-col w-full lg:sticky md:top-[12em] lg:w-1/3 mt-2 md:mt-12 px-2 md:px-10"
        >
          <p className="text-text-accent dark:text-[#b5685c] uppercase -mb-2 tracking-loose">
            {t('titleWorkingAction')}
          </p>
          <h4 className="not-italic text-text-accent dark:text-[#b5685c] leading-normal md:leading-relaxed mb-2">
            {t('checkOut')}
          </h4>
          <p className="text-text-secondary mb-8">{t('checkoutText')}</p>
          <Button
            variant="outlined"
            onClick={handleNavigation}
            className="flex flex-row gap-4 justify-center items-center mb-12 md:mb-0 mr-auto"
          >
            <Icon icon="ix:explore" width="30" height="30" />
            {t('exploreBtn')}
          </Button>
        </motion.div>

        <motion.div
          ref={fadeInRight.ref}
          initial="hidden"
          animate={fadeInRight.ctrls}
          variants={fadeInRight.vars}
          className="flex mx-auto md:ml-12 lg:w-2/3 sticky"
        >
          <div className="max-w-screen-2xl mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 md:py-20 lg:p-10 h-full">
              <div className="hidden md:block absolute h-full border-2 lg:border-4 right-[50%] border-[#501842] dark:border-[#b5685c] rounded-[1%]"></div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 lg:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-text-accent dark:text-[#b5685c]">
                    {t('dateFE')}
                  </p>
                  <h4 className="mb-0 font-bold text-text-accent dark:text-[#b5685c] dark:text-text-heading">
                    {t('titleFEmedie')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('edutacationCoursesFE')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('placeFEec') }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionEducationBE'),
                    }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techEducationBE') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline ">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3 text-text-accent dark:text-[#b5685c]">
                    {t('dateBE')}
                  </p>
                  <h4 className="mb-0 font-bold text-text-accent dark:text-[#b5685c] dark:text-text-heading ">
                    {t('titleBE')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t('edutacationCoursesFE')}
                  </p>
                  <p
                    className="leading-snug dark:text-text-primary text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('placeFEec') }}
                  ></p>
                  <p
                    className="leading-snug dark:text-text-primary text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionEducationBE'),
                    }}
                  ></p>
                  <p
                    className="leading-snug dark:text-text-primary text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techEducationBE') }}
                  ></p>
                </div>
              </div>

              <div className=" left-1/2 transform -translate-x-1/2 h-[10%] border-l-2 border-bg-secondary dark:border-text-accent"></div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                  <p className="mb-3 text-text-accent dark:text-[#b5685c]">
                    {' '}
                    {t('datePrint')}
                  </p>
                  <h4 className="mb-0 font-bold text-text-accent dark:text-[#b5685c] dark:text-text-heading ">
                    {t('titlePrint')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t('edutacationCoursesPrint')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('placePrint') }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionEducationPrint'),
                    }}
                  ></p>
                  <p
                    className=" leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('techEducationPrint'),
                    }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3 text-text-accent dark:text-[#b5685c]">
                    {t('dateGraphic')}
                  </p>
                  <h4 className="mb-0 font-bold text-text-accent dark:text-[#b5685c]">
                    {t('titleGraphic')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('edutacationCoursesGraphic')}
                  </p>
                  <p
                    className=" leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('placeGraphic') }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionEducationGraphic'),
                    }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('techEducationGraphic'),
                    }}
                  ></p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                  <p className="mb-3 text-text-accent dark:text-[#b5685c]">
                    {t('dateWedesign')}
                  </p>
                  <h4 className="mb-0 font-bold text-text-accent dark:text-[#b5685c]">
                    {t('titleWedesign')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('edutacationCoursesWedesign')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('placeWedesign') }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionEducationWedesign'),
                    }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('techEducationWedesign'),
                    }}
                  ></p>
                </div>
              </div>
            </div>

            {/* TODO: Add a small litle picture her under the line */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
