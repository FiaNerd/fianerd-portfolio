import { useEffect, useState } from "react";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";
import SectionPlate from "../component/Partial/SectionPlate";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import { useTranslation } from "react-i18next";
import Skills from "../component/skills/Skills";
import Title from "../component/Partial/Title";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const { t } = useTranslation(['home', 'skills']); // Access both home and skills translations

  useEffect(() => {
    const header = document.querySelector("header");

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useSmoothScroll();

  return (
    <>
      {/* Apply paddingTop to the wrapper div to ensure HeroSection is below the header */}
      <div
        style={{ paddingTop: `${headerHeight}px`, transition: "padding-top 0.3s ease" }}
        className="bg-blend-multiply header"
      >
        {/* Removed height calc and simplified the structure */}
        <SectionPlate id="home" className="relative">
          <HeroSection />
        </SectionPlate>
      </div>

      <Title id={"profile"} title={t("home:titleProfile")} dot={t("home:dot")} children={t("home:intro")} />

      <AboutNav />

      <SectionPlate id="me" bgColor="bg-bg-plate mb-8">
        <AboutMe />
      </SectionPlate>

      <section >
        <Skills />
      </section>
    </>
  );
};

export default HomePage;
