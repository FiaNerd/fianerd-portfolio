import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
      <div className="absolute grid grid-cols-1 md:grid-cols-[80%] 2xl:grid-cols-[50%] w-full h-full z-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start px-6 md:px-12 text-left md:text-left z-10 ">
          <div className="bg-gray-300/40 dark:bg-black/40 p-4 rounded text-text-accent ">
            <h1 className="text2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-0 font-bold leading-snug" dangerouslySetInnerHTML={{ __html: t("title") }} />
            <h2 className="text-[#350712] dark:text-accent-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-4 mb-0">{t("subTitle")}</h2>
            <h3 className="text-[#350712]/80 text-lg sm:text-xl md:text-xl ">{t("textIntro")}</h3>
            <p className="text-[#350712] text-sm sm:text-base md:text-md ">{t("text")}</p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover">
              {t("ctaButtonCV")}
            </Button>
            <Button className="bg-transparent border-2 text-[#350712] border-[#350712] hover:bg-[#350712] hover:text-hover-text">
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
