import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Title from "../../Partial/Title";

const Education = () => {
    const { t } = useTranslation("education");

  return (
    <>
    <div className="text-text-accent">

    <Title id="work-experience" title={t("titleWorkExperience")} dot={t("dot")} children={t("subTitleWorkExperience")} className="text-text-accent"/>
    </div>

    <div className="py-8">
      <div className="container mx-auto px-4 flex flex-col items-start lg:flex-row mb-24">
        <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10">
          <p className="ml-2 text-text-accent uppercase tracking-loose">{t("titleWorkingAction")}</p>
          <p className="text-3xl text-text-accent md:text-4xl leading-normal md:leading-relaxed mb-2">{t("checkOut")}</p>
          <p className="text-sm md:text-base text-text-secondary mb-8">
            {t("checkoutText")}
          </p>
          <NavLink to="#"
          className="bg-transparent mr-auto text-btn-bg text-xl font-medium hover:shadow-lg border-2 hover:bg-bg-hover font-heading tracking-wider hover:text-bg-primary rounded shadow py-2 px-4 border-btn-bg hover:border-transparent">
          {t("exploreBtn")}</NavLink>
        </div>

      <div className="flex mx-auto md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 py-20 lg:p-10 h-full">
            <div className="border-2-2 border-text-accent absolute h-full border"
              style={{
                right: "50%", 
                border:" 2px solid #4a1a3e",
                borderRadius: "1%"}}></div>
            <div className="border-2-2 border-text-accent absolute h-full border"
              style={{
                left: "50%", 
                border: "2px solid #4a1a3e",
                 borderRadius: "1%"
            }}></div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-text-accent">{t("dateFE")}</p>
                    <h4 className="mb-0 font-bold text-text-accent text-lg md:text-2xl">{t("titleFEmedie")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("edutacationCoursesFE")}
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placeFEec') }}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationBE') }}>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationBE') }}></p>
                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-text-accent">{t("dateBE")}</p>
                  <h4 className="mb-0 font-bold text-text-accent text-lg md:text-2xl">{t("titleBE")}</h4>
                  <p className="text-sm md:text-base text-text-secondary leading-snug dark:text-text-seondary text-opacity-100">
                    {t("edutacationCoursesFE")}
                  </p>
                  <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placeFEec')}}>
                  </p>
                  <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationBE')}}>
                  </p>
                  <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationBE')}}>
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-text-accent"> {t("datePrint")}</p>
                    <h4 className="mb-0 font-bold text-text-accent dark:text-text-heading text-lg md:text-2xl">{t("titlePrint")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("edutacationCoursesPrint")}
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary  text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placePrint')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationPrint')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationPrint')}}></p>

                  </div>
                </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-text-accent">{t("dateGraphic")}</p>
                    <h4 className="mb-0 font-bold text-text-accent text-lg md:text-2xl text-left">{t("titleGraphic")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary dark:text-text-secondary text-opacity-100">
                      {t("edutacationCoursesGraphic")}
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placeGraphic')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationGraphic')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationGraphic')}}></p>
                  </div>
              </div>

                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-text-accent">{t("dateWedesign")}</p>
                    <h4 className="mb-0 font-bold text-text-accent text-lg md:text-2xl">{t("titleWedesign")}</h4>
                    <p className="text-sm md:text-base leading-snug text-text-secondary text-opacity-100">
                      {t("edutacationCoursesWedesign")}
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placeWedesign')}}>
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationWedesign')}}>
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationWedesign')}}>
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

export default Education