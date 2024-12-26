import { useTranslation } from "react-i18next";
import Button from "../../Partial/Button";
import Title from "../../Partial/Title";

const Education = () => {
    const { t } = useTranslation("education");

  return (
    <>
    <Title id="work-experience" title={t("titleWorkExperience")} dot={t("dot")} children={t("subTitleWorkExperience")}/>

    <div className="dark:bg-black dark:text-text-primary py-8">
      <div className="container mx-auto px-4 flex flex-col items-start lg:flex-row mb-24">
        <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 md:px-10">
          <p className="ml-2 text-[#cb7f2c] uppercase tracking-loose">{t("titleWorkingAction")}</p>
          <p className="text-3xl text-amber-950 dark:text-text-heading md:text-4xl leading-normal md:leading-relaxed mb-2">{t("checkOut")}</p>
          <p className="text-sm md:text-base text-text-secondary mb-4">
            {t("checkoutText")}
          </p>
          <Button
          className="bg-transparent mr-auto hover:bg-[#cb7f2c] text-[#cb7f2c] hover:text-hover-text rounded shadow py-2 px-4 border-[#cb7f2c] hover:border-transparent">
          {t("exploreBtn")}</Button>
        </div>

      <div className="flex mx-auto md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden md:pr-4 md:pl-8 py-20 lg:p-10 h-full">
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
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateFE")}</p>
                    <h4 className="mb-0 font-bold text-accent-primaryfont-bold text-amber-950 dark:text-text-heading text-lg md:text-2xl">{t("titleFEmedie")}</h4>
                    <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-text-secondary text-opacity-100">
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
                  <p className="mb-3 text-base text-[#cb7f2c]">{t("dateBE")}</p>
                  <h4 className="mb-0 font-bold text-amber-950 dark:text-text-heading text-lg md:text-2xl">{t("titleBE")}</h4>
                  <p className="text-sm md:text-base leading-snug dark:text-text-seondary text-opacity-100">
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
                    <p className="mb-3 text-base text-[#cb7f2c]"> {t("datePrint")}</p>
                    <h4 className="mb-0 font-bold text-amber-950 dark:text-text-heading text-lg md:text-2xl">{t("titlePrint")}</h4>
                    <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-text-secondary text-opacity-100">
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
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateGraphic")}</p>
                    <h4 className="mb-0 font-bold text-amber-950 dark:text-text-heading text-lg md:text-2xl text-left">{t("titleGraphic")}</h4>
                    <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-text-secondary text-opacity-100">
                      {t("edutacationCoursesGraphic")}
                    </p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('placeGraphic')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('descriptionEducationGraphic')}}></p>
                    <p className="text-sm md:text-base leading-snug dark:text-text-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techEducationGraphic')}}></p>
                  </div>
              </div>

                <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWedesign")}</p>
                    <h4 className="mb-0 font-bold text-amber-950 dark:text-text-heading text-lg md:text-2xl">{t("titleWedesign")}</h4>
                    <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-text-secondary text-opacity-100">
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