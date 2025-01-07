import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../component/heroSection/HeroSection";
import Hobbies from "../component/hobbies/Hobbies";
import SectionPlate from "../component/Partial/SectionPlate";
import Title from "../component/Partial/Title";
import AboutMe from "../component/Profile/about/AboutMe";
import Education from "../component/Profile/education/Education";
import WorkExperience from "../component/Profile/experience/WorkExperience";
import Skills from "../component/Profile/skills/Skills";
import { useSmoothScroll } from "../hook/useSmoothScroll";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation([
    "profileTitle",
    "skillsTitle",
    "workTitle",
    "educationTitle",
    "hobbiesTitle",
  ]);

  // useEffect(() => {
  //   const header = document.getElementById("header");

  //   const handleResize = () => {
  //     const height = header?.getBoundingClientRect().height || 0;
  //     setHeaderHeight(height);
  //   };

  //   handleResize(); // Initial calculation
  //   window.addEventListener("resize", handleResize); // Recalculate on window resize

  //   return () => window.removeEventListener("resize", handleResize); // Cleanup
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      const height = header.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
  }, [headerHeight]);
  

  useSmoothScroll();

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`, // Adds space below header
        transition: "padding-top 0.3s ease",
      }}
      className="bg-blend-multiply"
    >
      {/* Hero Section */}
      <SectionPlate id="home" className="relative">
        <HeroSection />
      </SectionPlate>

      {/* Profile Section */}
      <SectionPlate
        id="profile"
        // style={{
        //   marginTop: `calc(${headerHeight}px + 20px)`,
        // }}
      >
        <Title
          id="me"
          title={t("profileTitle:titleProfile")}
          dot={t("profileTitle:dot")}
          children={t("profileTitle:intro")}
          className="text-[#ca5b87] dark:text-accent-primary bg-accent-secondary dark:bg-amber-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          sticky
          // style={{
          //   marginTop: `calc(${headerHeight}px + 20px)`,
          // }}
        />
        <AboutMe />
      </SectionPlate>

      {/* Skills Section */}
      <SectionPlate id="skills">
        <Skills />
      </SectionPlate>

      {/* Work Experience Section */}
      <SectionPlate id="work-experience">
        <Title
          id="experience"
          title={t("workTitle:titleWorkExperience")}
          dot={t("workTitle:dot")}
          children={t("workTitle:subTitleWorkExperience")}
          className="text-bg-secondary dark:text-text-accent bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <WorkExperience />
      </SectionPlate>

      {/* Education Section */}
      <SectionPlate id="education">
        <Title
          id="education"
          title={t("educationTitle:titleEducation")}
          dot={t("educationTitle:dot")}
          children={t("educationTitle:subTitleEducation")}
          className="text-text-accent dark:text-[#b5685c] bg-[#fff5d7] dark:bg-[#1b0909]"
          // style={{
          //   marginTop: `calc(${headerHeight} - 20em )`,
          // }}
          sticky
        />
        <Education />
      </SectionPlate>

      {/* Hobbies Section */}
      <SectionPlate id="hobbies">
        <Title
          id="hobbies"
          title={t("hobbiesTitle:titleHobbie")}
          dot={"!"}
          children={t("hobbiesTitle:subTitleHobbie")}
          className="text-hover-text dark:text-accent-primary bg-slate-900 dark:bg-stone-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary px-4"
          sticky
        />
        <Hobbies />
      </SectionPlate>
    </div>
  );
};

export default HomePage;
