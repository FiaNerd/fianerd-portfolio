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
    <>
      <section className="mb-12 md:py-8">
        {/* <div className="hidden md:block"> */}
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start lg:flex-row md:mb-20">
          <motion.div
            ref={fadeInLeft.ref}
            initial="hidden"
            animate={fadeInLeft.ctrls}
            variants={fadeInLeft.vars}
            className="flex flex-col w-full lg:sticky md:top-[12em] mb-8 lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10"
          >
            <p className="text-bg-secondary dark:text-text-accent uppercase -mb-2 tracking-loose text-xs sm:text-sm md:text-base">
              {t('titleWorkingAction')}
            </p>
            <h4 className="not-italic text-bg-secondary dark:text-text-accent leading-normal md:leading-relaxed mb-2 text-sm sm:text-lg md:text-xl">
              {t('checkOut')}
            </h4>
            <p className="text-text-secondary mb-8 text-xs sm:text-sm md:text-base">
              {t('checkoutText')}
            </p>
            <Button
              variant="outlined"
              onClick={handleNavigation}
              className="flex flex-row gap-4 justify-center items-center mb-12 md:mb-0 mr-auto"
            >
              <Icon icon="ix:explore" width="30" height="30" />
              {t('exploreBtn')}
            </Button>
          </motion.div>

          {/* Mobile Layout */}
          <div className="block md:hidden py-8 container mx-auto ">
            <div className="relative">
              <div
                className="border-r-4 border-bg-secondary dark:border-text-accent absolute h-full top-0"
                style={{ left: '9px' }}
              ></div>
              <ul className="list-none m-0 p-0">
                {/* Timeline Items */}
                {[
                  {
                    title: t('titleBrutal'),
                    date: t('dateWorkBrutal'),
                    description: t('descriptionProjectBrutal'),
                    tech: t('techBrutal'),
                  },
                  {
                    title: t('titleProdigies'),
                    date: t('dateWorkProdigies'),
                    description: t('descriptionProjectProdigies'),
                    tech: t('techProdigies'),
                  },
                  {
                    title: t('titleSlowfashion'),
                    date: t('dateWorkSlowfashion'),
                    description: t('descriptionProjectSlowfashion'),
                    tech: t('techSlowfashion'),
                  },
                  {
                    title: t('titlePrintagon'),
                    date: t('dateWorkPrintagon'),
                    description: t('descriptionProjectPrintagon'),
                    tech: t('techPrintagon'),
                  },
                  {
                    title: t('titleStumpen'),
                    date: t('dateWorkStumpen'),
                    description: t('descriptionProjectStumpen'),
                    tech: t('techStumpen'),
                  },
                ].map((item, index) => (
                  <li key={index} className="mb-5">
                    <div className="flex group items-center">
                      <div className="border-bg-secondary dark:border-text-accent bg-bg-primary group-hover:bg-bg-primary z-10 rounded-full border-4 h-5 w-5">
                        <div className="bg-bg-secondary dark:bg-accent-primary h-1 w-6 items-center ml-4 mt-1"></div>
                      </div>
                      <div className="flex-1 ml-4 z-10 font-medium">
                        <div className="order-1 space-y-2 bg-bg-primary rounded-lg shadow-only transition-ease px-6 py-4">
                          <p className="text-sm text-bg-secondary dark:text-text-accent">
                            {item.date}
                          </p>
                          <h3 className="mb-3 font-bold text-bg-secondary dark:text-text-accent text-2xl">
                            {item.title}
                          </h3>
                          <hr />
                          <p
                            className="text-sm font-medium leading-snug tracking-wide text-text-primary text-opacity-100"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                          <p
                            className="text-sm font-medium leading-snug tracking-wide text-text-primary text-opacity-100"
                            dangerouslySetInnerHTML={{
                              __html: item.tech,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            ref={fadeInRight.ref}
            initial="hidden"
            animate={fadeInRight.ctrls}
            variants={fadeInRight.vars}
            className="flex mx-auto lg:w-2/3 w-full sticky"
          >
            <div className="hidden md:block max-w-screen-2xl w-full h-full">
              <div className="grid grid-rows-2 gap-4 md:relative wrap overflow-hidden md:pr-4 md:py-12 lg:p-10 h-full">
                <div className=" absolute h-full border-2 lg:border-4 md:left-1/2 md:-translate-x-1/2 border-bg-secondary dark:border-text-accent rounded-[1%] opacity-60"></div>

                <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 lg:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-bg-secondary dark:text-text-accent text-xs sm:text-sm md:text-base">
                      {t('dateWorkBrutal')}
                    </p>
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading text-sm sm:text-lg md:text-xl">
                      {t('titleBrutal')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleBrutal')}
                    </p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectBrutal'),
                      }}
                    ></p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techBrutal') }}
                    ></p>
                  </div>
                </div>

                <div className="md:mb-8 flex justify-between items-center w-full">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                    <p className="mb-3 text-bg-secondary dark:text-text-accent text-xs sm:text-sm md:text-base">
                      {t('dateWorkProdigies')}
                    </p>

                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading text-sm sm:text-lg md:text-xl">
                      {t('titleProdigies')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-accent dark:text-text-seondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleProdigies')}
                    </p>
                    <p
                      className="leading-snug dark:text-text-primary text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectProdigies'),
                      }}
                    ></p>
                    <p
                      className="leading-snug dark:text-text-primary text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techProdigies') }}
                    ></p>
                  </div>
                </div>

                <div className=" left-1/2 transform md:-translate-x-1/2 h-[10%] border-l-2 border-bg-secondary dark:border-text-accent"></div>

                <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339] text-xs sm:text-sm md:text-base">
                      {' '}
                      {t('dateWorkOmegapoint')}
                    </p>

                    <div className="absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339] text-sm sm:text-lg md:text-xl">
                      {t('titleOmegapoint')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-accent dark:text-text-seondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleOmegapoint')}
                    </p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectOmegapoint'),
                      }}
                    ></p>
                    <p
                      className=" leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techOmegapoint') }}
                    ></p>
                  </div>
                </div>

                <div className="md:mb-8 flex justify-between items-center w-full">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339] text-xs sm:text-sm md:text-base">
                      {t('dateWorkAllaTiders')}
                    </p>

                    <div className="absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold  text-bg-secondary dark:text-[#aa7339] text-sm sm:text-lg md:text-xl">
                      {t('titleAllaTiders')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleAllaTiders')}
                    </p>
                    <p
                      className=" leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectAllaTiders'),
                      }}
                    ></p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techAllaTiders') }}
                    ></p>
                  </div>
                </div>

                <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full ">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339] text-xs sm:text-sm md:text-base">
                      {t('dateWorkSlowfashion')}
                    </p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339] text-sm sm:text-lg md:text-xl">
                      {t('titleSlowfashion')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleSlowfashion')}
                    </p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectSlowfashion'),
                      }}
                    ></p>
                    <p
                      className="mb-0 md:mb-8 leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techSlowfashion') }}
                    ></p>
                  </div>
                </div>

                <div className="md:mb-8 flex justify-between items-center w-full">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                    <p className="mb-3  text-bg-secondary dark:text-[#aa7339] text-xs sm:text-sm md:text-base">
                      {t('dateWorkPrintagon')}
                    </p>

                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339] text-sm sm:text-lg md:text-xl">
                      {t('titlePrintagon')}
                    </h4>
                    <p className=" leading-snug text-text-secondary dark:text-text-secondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitlePrintagon')}
                    </p>
                    <p
                      className="leading-snug  text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectPrintagon'),
                      }}
                    ></p>
                    <p
                      className="leading-snug  text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techPrintagon') }}
                    ></p>
                  </div>
                </div>

                <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full">
                  <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339] text-xs sm:text-sm md:text-base">
                      {t('dateWorkStumpen')}
                    </p>

                    <div className="absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-bg-primary border-2 md:border-4 border-bg-secondary dark:border-text-accent rounded-full z-20"></div>

                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339] text-sm sm:text-lg md:text-xl">
                      {t('titleStumpen')}
                    </h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100 text-xs sm:text-sm md:text-base">
                      {t('workTitleStumpen')}
                    </p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: t('descriptionProjectStumpen'),
                      }}
                    ></p>
                    <p
                      className="leading-snug text-opacity-100 text-xs sm:text-sm md:text-base"
                      dangerouslySetInnerHTML={{ __html: t('techStumpen') }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
