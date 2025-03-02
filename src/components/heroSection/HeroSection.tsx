import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import i18n from "../../../public/assets/i18n/i18n";
import Button from "../partials/Button";
import ResponsiveHeroImage from "./ResponsiveHeroImage";

const HeroSection = () => {
  const { t } = useTranslation("heroSection");
  const resumePath = i18n.language === "en" ? "/files/SofiaMattiasson-Resume-en.pdf" : "/files/SofiaMattiasson-CV-sv.pdf";
  const resumeName = i18n.language === "en" ? "SofiaMattiasson-Resume-en.pdf" : "SofiaMattiasson-CV-sv.pdf";
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full flex justify-center">
      <div className="absolute grid grid-cols-1 md:grid-cols-[80%] lg:grid-cols-[60%] 2xl:grid-cols-[50%] w-full h-full z-10">
        <div className="flex flex-col justify-center items-start px-6 md:px-12 text-left md:text-left z-10 w-full h-full">
          <div className={"bg-slate-50/40 dark:bg-black/40 p-6 rounded"}>
            <h1
              className="text-[#350712] dark:text-text-accent text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-4 font-bold leading-snug lg:mb-12"
              dangerouslySetInnerHTML={{ __html: t("title") }}
            />
            <h2 className="text-[#5c1e64] dark:text-accent-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-0">
              {t("subTitle")}
            </h2>
            <h3 className="text-[#350712]/80 dark:text-text-accent text-lg sm:text-xl md:text-xl mb-4">
              {t("textIntro")}
            </h3>
            <p className="text-[#350712] dark:text-text-primary text-sm sm:text-base md:text-md mb-4 lg:mb-8">
              {t("text")}
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <Button className="flex flex-row gap-2 justify-center items-center bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide">
                <Icon icon="line-md:cloud-alt-download" width="30" height="30" /> 
                <a href={resumePath} download={resumeName}>{t("ctaButtonCV")}</a>
              </Button>
              <Button 
                onClick={() => navigate('/portfolio')} 
                className="flex flex-row gap-2 justify-center items-center border-2 border-[#350712] bg-[#350712] dark:bg-transparent dark:border-btn-bg text-bg-primary dark:text-btn-bg tracking-wide font-semibold hover:bg-bg-hover hover:border-[#350712ab] hover:text-bg-primary dark:hover:text-bg-primary dark:hover:bg-bg-hover"
              >
                <Icon icon="ix:explore" width="30" height="30" /> {t("ctaButtonPortfolio")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveHeroImage />
    </div>
  );
};

export default HeroSection;