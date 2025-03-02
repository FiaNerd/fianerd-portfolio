import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SvgArrowLine from "../../../assets/svg/SvgArrowLine";
import Button from "../../partials/Button";

const WorkExperience = () => {
    const { t } = useTranslation("profile/experience");
    const navigate = useNavigate();
    
  return ( 
    <section className="mb-12 md:py-8 ">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-start lg:flex-row md:mb-20">
        <div className="flex flex-col w-full lg:sticky md:top-[12em] lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10">
          <p className="text-bg-secondary dark:text-text-accent uppercase -mb-2 tracking-loose">{t("titleWorkingAction")}</p>
          <h4 className="not-italic text-bg-secondary dark:text-text-accent leading-normal md:leading-relaxed mb-2">{t("checkOut")}</h4>
          <p className="text-text-secondary mb-8">
            {t("checkoutText")}
          </p>
          <Button onClick={() => navigate('/portfolio')}
          className="flex flex-row gap-4 justify-center items-center mb-12 md:mb-0 font-sub-heading bg-transparent mr-auto text-btn-bg font-bold hover:shadow-lg border-2 hover:bg-bg-hover tracking-wider hover:text-bg-primary rounded shadow border-btn-bg hover:border-transparent">
           <Icon icon="ix:explore" width="30" height="30" /> 
            {t("exploreBtn")}
         </Button>
        </div>

      <div className="flex mx-auto md:ml-12 lg:w-2/3 sticky">
        <div className="max-w-screen-xl	mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 md:py-20 lg:p-10 h-full">
          <div className="hidden md:block absolute h-full border-2 lg:border-4 right-[50%] border-bg-secondary dark:border-text-accent rounded-[1%]"></div>

              <div className="rounded-lg md:mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 lg:w-5/12"></div>
                  <div className="order-1 px-2 py-4 md:w-5/12 px-1 mdpy-4 text-left">
                    <p className="mb-3 text-bg-secondary dark:text-text-accent">{t("dateWorkBrutal")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading">{t("titleBrutal")}</h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleBrutal")}
                    </p>
                    <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectBrutal') }}>
                    </p>
                    <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techBrutal') }}>
                    </p>
                  </div>
                </div>

                  {/* <SvgArrowLine colorDark="#b0c3c6" colorLight="#aa7339" direction="right" className="items-center md:hidden" /> */}

                  

              <div className="md:mb-8 flex justify-between items-center w-full left-timeline ">
                <div className="order-1 md:w-5/12"></div>
                <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                  <p className="mb-3 text-bg-secondary dark:text-text-accent">{t("dateWorkProdigies")}</p>
                  <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading ">{t("titleProdigies")}</h4>
                  <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                    {t("workTitleProdigies")}
                  </p>
                  <p className="leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectProdigies')}}>
                  </p>
                  <p className="leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techProdigies')}}>
                  </p>
                </div>
              </div>

              <div className=" left-1/2 transform -translate-x-1/2 h-[10%] border-l-2 border-bg-secondary dark:border-text-accent"></div>

              <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p className="mb-3 text-bg-secondary dark:text-text-accent"> {t("dateWorkOmegapoint")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-text-accent dark:text-text-heading ">{t("titleOmegapoint")}</h4>
                    <p className="leading-snug text-text-secondary dark:text-text-accentdark:text-text-seondary text-opacity-100">
                      {t("workTitleOmegapoint")}
                    </p>
                    <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectOmegapoint')}}></p>
                    <p className=" leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techOmegapoint')}}></p>

                  </div>
                </div>


              <div className="md:mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">{t("dateWorkAllaTiders")}</p>
                    <h4 className="mb-0 font-bold  text-bg-secondary dark:text-[#aa7339]">{t("titleAllaTiders")}</h4>
                    <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleAllaTiders")}
                    </p>
                    <p className=" leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectAllaTiders')}}></p>
                    <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techAllaTiders')}}></p>
                  </div>
              </div>


                <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 md:w-5/12"></div>
                    <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                      <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">{t("dateWorkSlowfashion")}</p>
                      <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">{t("titleSlowfashion")}</h4>
                      <p className="leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                        {t("workTitleSlowfashion")}
                      </p>
                      <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectSlowfashion')}}>
                      </p>
                      <p className="mb-0 md:mb-8 leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techSlowfashion')}}>
                      </p>
                    </div>
                  </div>

                      
                  <div className="md:mb-8 flex justify-between items-center w-full left-timeline">
                    <div className="order-1 md:w-5/12"></div>
                      <div className="order-1 md:w-5/12 px-1 py-4 text-right md:text-left">
                        <p className="mb-3  text-bg-secondary dark:text-[#aa7339]">{t("dateWorkPrintagon")}</p>
                        <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">{t("titlePrintagon")}</h4>
                        <p className=" leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                          {t("workTitlePrintagon")}
                        </p>
                        <p className="leading-snug  text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectPrintagon')}}></p>
                        <p className="leading-snug  text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techPrintagon')}}></p>
                      </div>
                  </div>


                  <div className="md:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 md:w-5/12"></div>
                  <div className="order-1 md:w-5/12 px-1 py-4 text-left md:text-right">
                    <p className="mb-3 text-bg-secondary dark:text-[#aa7339]">{t("dateWorkStumpen")}</p>
                    <h4 className="mb-0 font-bold text-bg-secondary dark:text-[#aa7339]">{t("titleStumpen")}</h4>
                    <p className=" leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("workTitleStumpen")}
                    </p>
                    <p className="leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectStumpen')}}>
                    </p>
                    <p className=" leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techStumpen')}}>
                    </p>
                  </div>
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

