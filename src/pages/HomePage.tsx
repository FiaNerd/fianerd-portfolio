import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../component/heroSection/HeroSection";
import SectionPlate from "../component/Partial/SectionPlate";
import Title from "../component/Partial/Title";
import AboutMe from "../component/Profile/about/AboutMe";
import AboutNav from "../component/Profile/about/AboutNav";
import WorkExperience from "../component/Profile/experience/WorkExperience";
import Skills from "../component/Profile/skills/Skills";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import Education from "../component/Profile/education/Education";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation(['home', 'skills']); // Access both home and skills translations

  useEffect(() => {
    const header = document.getElementById("header");

    const handleResize = () => {
      if (header) {
        const height = header.getBoundingClientRect().height;
        console.log("Header Height:", height); // Debug log to check the height
        setHeaderHeight(height); // Update the header height state
      }
    };

    // Set the initial header height on mount
    handleResize();

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this only runs on mount

  useSmoothScroll();

  return (
    <>
      {/* Apply dynamic paddingTop to the wrapper div to ensure HeroSection is below the header */}
      <div
        style={{
          paddingTop: `${headerHeight}px`, // Apply dynamic padding based on header height
          transition: "padding-top 0.3s ease", // Smooth transition for padding change
        }}
        className="bg-blend-multiply"
      >
        {/* Hero Section */}
        <SectionPlate id="home" className="relative">
          <HeroSection />
        </SectionPlate>
      </div>

      <Title id={"profile"} title={t("home:titleProfile")} dot={t("home:dot")} children={t("home:intro")} />

      <AboutNav />

      <SectionPlate id="me" bgColor="bg-bg-plate">
        <AboutMe />
      </SectionPlate>

      <section >
        <Skills />
      </section>

      <section >
        <WorkExperience />
      </section>

      <section >
        <Education />
      </ section>
    </>
  );
};

export default HomePage;
