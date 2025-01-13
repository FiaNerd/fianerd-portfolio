import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext";
import useFadeIn from "../../hook/useFadeIn";
import Button from "../Partial/Button";
import ResponsiveHeroImage from "./ResponsiveHeroImage";

const HeroSection = () => {
  const { t } = useTranslation("heroSection");
  const [userIsDesktop, setUserIsDesktop] = useState(window.innerWidth > 768);
  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });


  useEffect(() => {
    const handleResize = () => {
      setUserIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center">
      <div className="absolute grid grid-cols-1 md:grid-cols-[80%] lg:grid-cols-[60%] 2xl:grid-cols-[50%] w-full h-full z-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start px-6 md:px-12 text-left md:text-left z-10 w-full h-full">
          <div className={"bg-slate-50/20 dark:bg-black/40 p-4 rounded text-nav-text dark:text-text-accent "}>
          <h1
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-4 font-bold leading-snug lg:mb-12"
              dangerouslySetInnerHTML={{ __html: t("title") }}
            />
            <h2 className="text-[#350712] dark:text-accent-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-4 mb-4">{t("subTitle")}</h2>
            <h3 className="text-[#350712]/80 dark:text-text-accent text-lg sm:text-xl md:text-xl mb-4">{t("textIntro")}</h3>
            <p className="text-[#350712] dark:text-text-primary text-sm sm:text-base md:text-md mb-4 lg:mb-8">{t("text")}</p>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-8">
              <Button className="bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover">
                {t("ctaButtonCV")}
              </Button>
              <Button className="bg-transparent border-2 text-[#350712] dark:text-btn-bg border-[#350712] dark:border-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary dark:hover:text-bg-primary">
                {t("ctaButtonPortfolio")}
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
// Remove the incorrect useContext function definition

