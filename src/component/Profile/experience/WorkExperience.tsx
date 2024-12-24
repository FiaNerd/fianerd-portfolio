import { useTranslation } from "react-i18next";
import Title from "../../Partial/Title";

const WorkExperience = () => {
    const { t } = useTranslation("workExperience");
    // const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });
    
  return (
    <>
    <Title id="work" title={t("titleWorkExperience")} dot={t("dot")} children={t("subTitleWorkExperience")}/>

   
    <div className="dark:bg-black dark:text-accent-primary py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-[#cb7f2c] uppercase tracking-loose">{t("titleWorkingAction")}</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{t("checkOut")}</p>
        <p className="text-sm md:text-base text-accent-primary mb-4">
          {t("checkoutText")}
        </p>
        <a href="#"
        className="bg-transparent mr-auto hover:bg-[#cb7f2c] text-[#cb7f2c] hover:text-accent-primary rounded shadow hover:shadow-lg py-2 px-4 border border-[#cb7f2c] hover:border-transparent">
        {t("exploreBtn")}</a>
      </div>

      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{
                right: "50%", 
                border:" 2px solid #cb7f2c",
                borderRadius: "1%"}}></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{
                left: "50%", 
                border: "2px solid #cb7f2c",
                 borderRadius: "1%"
            }}></div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWorkBrutal")}</p>
                    <h4 className="mb-3 font-bold text-amber-950 text-lg md:text-2xl">{t("titleBrutal")}</h4>
                    <p className="text-sm md:text-base leading-snug text-amber-950 text-opacity-100">
                      {t("workTitleBrutal")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectBrutal') }}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techBrutal') }}>
                    </p>
                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWorkProdigies")}</p>
                  <h4 className="mb-3 font-bold text-amber-950 text-accent-primary text-lg md:text-2xl">{t("titleProdigies")}</h4>
                  <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100">
                    {t("workTitleProdigies")}
                  </p>
                  <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectProdigies')}}>
                  </p>
                  <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techProdigies')}}>
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-[#cb7f2c]"> {t("dateWorkSlowfashion")}</p>
                    <h4 className="mb-3 font-bold text-amber-950 text-lg md:text-2xl">{t("titleSlowfashion")}</h4>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100">
                      {t("workTitleSlowfashion")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectSlowfashion')}}></p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techSlowfashion')}}></p>
                    
                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWorkOmegapoint")}</p>
                    <h4 className="mb-3 font-bold text-amber-950 dark:text-accent-primary text-lg md:text-2xl text-left">{t("titleOmegapoint")}</h4>
                    <p className="text-sm md:text-base leading-snug text-accent-primary 0 text-opacity-100">
                      {t("workTitleOmegapoint")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectOmegapoint')}}></p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techOmegapoint')}}></p>
                  </div>
              </div>

                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWorkProdigies")}</p>
                    <h4 className="mb-3 font-bold text-amber-950 text-accent-secondary text-lg md:text-2xl">{t("titleProdigies")}</h4>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100">
                      {t("workTitleProdigies")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionProjectProdigies')}}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techProdigies')}}>
                    </p>
                  </div>
              </div>          
          {/* TODO: Add a small litle picture her under the line */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkExperience

