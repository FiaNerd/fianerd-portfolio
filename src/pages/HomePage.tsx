import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../component/heroSection/HeroSection";
import Hobbies from "../component/hobbies/Hobbies";
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

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);


  useSmoothScroll(headerHeight);

  return (
    <div
      // style={{
      //   paddingTop: `${headerHeight}px`,
      //   transition: "padding-top 0.3s ease",
      // }}
      className="bg-blend-multiply"
    >
      {/* Hero Section */}
      <div id="home" className="relative">
        <HeroSection />
      </div>

      {/* Profile Section */}
      <div id="profile">
        <Title
          id="me"
          title={t("profileTitle:titleProfile")}
          dot={t("profileTitle:dot")}
          children={t("profileTitle:intro")}
          className="text-[#ca5b87] top-0 dark:text-accent-primary bg-accent-secondary dark:bg-amber-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          // style={{
          //   paddingTop: `${headerHeight -100}px`,
          //   transition: "padding-top 0.3s ease",
          // }}
          sticky
        />
        <AboutMe />
      </div>

      {/* Skills Section */}
      <div id="skills" className="top-0 ">
        <Skills />
      </div>

      {/* Work Experience Section */}
      <div id="work-experience">
        <Title
          id="experience"
          title={t("workTitle:titleWorkExperience")}
          dot={t("workTitle:dot")}
          children={t("workTitle:subTitleWorkExperience")}
          className="text-bg-secondary dark:text-text-accent bg-[#fff5d7] dark:bg-[#1b0909]"
          // style={{ paddingTop: `${headerHeight + 100}px` }}
          sticky
        />
        <WorkExperience />
      </div>

      {/* Education Section */}
      <div id="education">
        <Title
          id="education"
          title={t("educationTitle:titleEducation")}
          dot={t("educationTitle:dot")}
          children={t("educationTitle:subTitleEducation")}
          className="text-text-accent dark:text-[#b5685c] bg-[#fff5d7] dark:bg-[#1b0909]"
          // style={{ paddingTop: `${headerHeight + 20}px` }}
          sticky
        />
        <Education />
      </div>

      {/* Hobbies Section */}
      <div id="hobbies">
        <Title
          id="hobbies"
          title={t("hobbiesTitle:titleHobbie")}
          dot={"!"}
          children={t("hobbiesTitle:subTitleHobbie")}
          className="text-hover-text top-0 dark:text-accent-primary bg-slate-900 dark:bg-stone-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary px-4"
          // style={{
          //   paddingTop: `${headerHeight + 20}px`,
          //   transition: "padding-top 0.3s ease",
          // }}
          sticky
        />
        <Hobbies />
      </div>
    </div>
  );
};

export default HomePage;
