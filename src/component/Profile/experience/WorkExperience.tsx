import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import useFadeIn from "../../../hook/useFadeIn";
import Title from "../../Partial/Title";

const WorkExperience = () => {
    const { t } = useTranslation("workExperience");
    const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });
    
  return (
    <>
    <Title id="work" title={t("titleWorkExperience")} dot={t("dot")} children={t("subTitleWorkExperience")}/>

    <div className="dark:bg-black text-amber-950 dark:text-accent-primary py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-[#cb7f2c] uppercase tracking-loose">{t("titleWorkingAction")}</p>
        <p className="text-amber-950 text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{t("checkOut")}</p>
        <p className="text-sm md:text-base text-amber-950 mb-4">
          {t("checkoutText")}
        </p>
        <NavLink to="#"
        className="bg-transparent mr-auto hover:bg-[#cb7f2c] text-[#cb7f2c] hover:text-hover-text rounded shadow hover:shadow-lg py-2 px-4 border border-[#cb7f2c] hover:border-transparent">
        {t("exploreBtn")}</NavLink>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right: "50%",
                border: "2px solid #cb7f2c",
               borderRadius: "1%"}}>
               </div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{
                left: "50%",
                 border: "2px solid#cb7f2c",
                  borderRadius:" 1%"}}>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-[#cb7f2c]">{t("dateWorkBrutal")}</p>
                <h4 className="mb-3 text-amber-950 font-bold text-lg md:text-2xl">{t("titleBrutal")}</h4>
                <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-accent-primary text-opacity-100">
                  {t("workTitleBrutal")}
                </p>
                <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techBrutal') }}>
                </p>
                <p className="text-sm md:text-base leading-snug text-amber-950 dark:text-accent-primary text-opacity-100" dangerouslySetInnerHTML={{ __html: t('techBrutal') }}>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default WorkExperience