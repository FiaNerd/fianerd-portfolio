import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../partials/Button";

const WorkExperience = () => {
    const { t } = useTranslation("profile/experience");
    const navigate = useNavigate();
    
  return ( 
    <section className="py-8">
      <div className="max-w-screen-xl	mx-auto px-4 flex flex-col items-start lg:flex-row mb-24">
        <div className="flex flex-col w-full lg:sticky md:top-[12em] lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10">
          <p className="text-bg-secondary dark:text-text-accent uppercase -mb-2 tracking-loose">{t("titleWorkingAction")}</p>
          <h4 className="not-italic text-bg-secondary dark:text-text-accent md:text-4xl leading-normal md:leading-relaxed mb-2">{t("checkOut")}</h4>
          <p className="text-sm md:text-base text-text-secondary mb-8">
            {t("checkoutText")}
          </p>
          <Button onClick={() => navigate('/portfolio')}
          className="flex flex-row gap-4 justify-center items-center text-5xl font-sub-heading bg-transparent mr-auto text-btn-bg font-bold hover:shadow-lg border-2 hover:bg-bg-hover tracking-wider hover:text-bg-primary rounded shadow border-btn-bg hover:border-transparent">
           <Icon icon="ix:explore" width="30" height="30" /> 
            {t("exploreBtn")}
         </Button>
        </div>

      <div className="flex mx-auto md:ml-12 lg:w-2/3 sticky">
        <div className="max-w-screen-xl	mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 py-20 lg:p-10 h-full">
          <div className="absolute h-full border-4 right-[50%] border-bg-secondary dark:border-text-accent rounded-[1%]"></div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-bg-secondary dark:text-text-accent">{t("dateWorkBrutal")}</p>
                    <h4 className="mb-0 text-bg-secondary dark:text-text-accent dark:text-text-heading text-lg md:text-2xl">{t("titleBrutal")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleBrutal")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectBrutal') }}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techBrutal') }}>
                    </p>
                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-bg-secondary dark:text-text-accent">{t("dateWorkProdigies")}</p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading text-lg md:text-2xl">{t("titleProdigies")}</h4>
                  <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t("workTitleProdigies")}
                  </p>
                  <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectProdigies')}}>
                  </p>
                  <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techProdigies')}}>
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-bg-secondary dark:dark:text-[#aa7339]"> {t("dateWorkOmegapoint")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:dark:text-[#aa7339] text-lg md:text-2xl">{t("titleOmegapoint")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:dark:text-[#aa7339] text-opacity-100">
                      {t("workTitleOmegapoint")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectOmegapoint')}}></p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techOmegapoint')}}></p>

                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-bg-secondary dark:dark:text-[#aa7339]">{t("dateWorkAllaTiders")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:dark:text-[#aa7339] text-lg md:text-2xl text-left">{t("titleAllaTiders")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleAllaTiders")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectAllaTiders')}}></p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techAllaTiders')}}></p>
                  </div>
              </div>

                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-bg-secondary dark:dark:text-[#aa7339]">{t("dateWorkSlowfashion")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:dark:text-[#aa7339] text-lg md:text-2xl">{t("titleSlowfashion")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleSlowfashion")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectSlowfashion')}}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techSlowfashion')}}>
                    </p>
                  </div>
                      
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-bg-secondary dark:dark:text-[#aa7339]">{t("dateWorkPrintagon")}</p>
                        <h4 className="mb-0 font-bold text-bg-secondary dark:dark:text-[#aa7339] text-lg md:text-2xl text-left">{t("titlePrintagon")}</h4>
                        <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                          {t("workTitlePrintagon")}
                        </p>
                        <p className="text-sm md:text-base leading-snug  text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectPrintagon')}}></p>
                        <p className="text-sm md:text-base leading-snug  text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techPrintagon')}}></p>
                      </div>
                  </div>

              <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-bg-secondary dark:dark:text-[#aa7339]">{t("dateWorkStumpen")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:dark:text-[#aa7339] text-lg md:text-2xl">{t("titleStumpen")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleStumpen")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectStumpen')}}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techStumpen')}}>
                    </p>
                  </div>
              </div>          
              
          {/* TODO: Add a small litle picture her under the line */}
            </div>
          </div>
        </div>
      </section>
  )
}

export default WorkExperience

