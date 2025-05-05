import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../partials/Button';
import { startTransition, useEffect } from 'react';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const { t } = useTranslation('profile/experience');
  const navigate = useNavigate();

  const handleNavigation = () => {
    startTransition(() => {
      // Navigate to the portfolio page
      navigate('/portfolio');

      setTimeout(() => {
        const element = document.getElementById('my-work');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 300);
    });
  };

  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <section className="mb-12 md:py-8 ">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start lg:flex-row md:mb-20">
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="flex flex-col w-full lg:sticky md:top-[12em] lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10"
        >
          <p className="text-bg-secondary dark:text-text-accent uppercase -mb-2 tracking-loose">
            {t('titleWorkingAction')}
          </p>
          <h4 className="not-italic text-bg-secondary dark:text-text-accent leading-normal md:leading-relaxed mb-2">
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
          <div className="max-w-screen-2xlmx-auto w-full h-full">
            <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 md:py-20 lg:p-10 h-full">
              <div className="hidden md:block absolute h-full border-2 lg:border-4 right-[50%] border-bg-secondary dark:border-text-accent rounded-[1%]"></div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 lg:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-bg-secondary dark:text-text-accent">
                    {t('dateWorkBrutal')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading">
                    {t('titleBrutal')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('workTitleBrutal')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectBrutal'),
                    }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techBrutal') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline ">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3 text-bg-secondary dark:text-text-accent">
                    {t('dateWorkProdigies')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading ">
                    {t('titleProdigies')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t('workTitleProdigies')}
                  </p>
                  <p
                    className="leading-snug dark:text-text-primary text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectProdigies'),
                    }}
                  ></p>
                  <p
                    className="leading-snug dark:text-text-primary text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techProdigies') }}
                  ></p>
                </div>
              </div>

              <div className=" left-1/2 transform -translate-x-1/2 h-[10%] border-l-2 border-bg-secondary dark:border-text-accent"></div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                  <p className="mb-3 text-bg-secondary dark:text-text-accent">
                    {' '}
                    {t('dateWorkOmegapoint')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading ">
                    {t('titleOmegapoint')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t('workTitleOmegapoint')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectOmegapoint'),
                    }}
                  ></p>
                  <p
                    className=" leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techOmegapoint') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">
                    {t('dateWorkAllaTiders')}
                  </p>
                  <h4 className="mb-0 font-bold  text-bg-secondary dark:text-[#aa7339]">
                    {t('titleAllaTiders')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('workTitleAllaTiders')}
                  </p>
                  <p
                    className=" leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectAllaTiders'),
                    }}
                  ></p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techAllaTiders') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                  <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">
                    {t('dateWorkSlowfashion')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">
                    {t('titleSlowfashion')}
                  </h4>
                  <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('workTitleSlowfashion')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectSlowfashion'),
                    }}
                  ></p>
                  <p
                    className="mb-0 md:mb-8 leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techSlowfashion') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3  text-bg-secondary dark:text-[#aa7339]">
                    {t('dateWorkPrintagon')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">
                    {t('titlePrintagon')}
                  </h4>
                  <p className=" leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('workTitlePrintagon')}
                  </p>
                  <p
                    className="leading-snug  text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectPrintagon'),
                    }}
                  ></p>
                  <p
                    className="leading-snug  text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techPrintagon') }}
                  ></p>
                </div>
              </div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                  <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">
                    {t('dateWorkStumpen')}
                  </p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">
                    {t('titleStumpen')}
                  </h4>
                  <p className=" leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                    {t('workTitleStumpen')}
                  </p>
                  <p
                    className="leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{
                      __html: t('descriptionProjectStumpen'),
                    }}
                  ></p>
                  <p
                    className=" leading-snug text-opacity-100"
                    dangerouslySetInnerHTML={{ __html: t('techStumpen') }}
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

export default WorkExperience;
