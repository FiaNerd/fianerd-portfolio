import { useTranslation } from "react-i18next";
import HeroSection from "../components/heroSection/HeroSection";
import Hobbies from "../components/hobbies/Hobbies";
import Title from "../components/partials/Title";
import AboutMe from "../components/profile/about/AboutMe";
import Education from "../components/profile/education/Education";
import WorkExperience from "../components/profile/experience/WorkExperience";
import Skills from "../components/profile/skills/Skills";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useHeaderHeight from "../hook/useHeaderHeight";
import useSmoothScroll from "../hook/useSmoothScroll";
import useScrollUpdateURL from "../hook/useScrollUpdate";
import useScrollSpy from "../hook/useScrollSpy";

const HomePage = () => {
  const { t } = useTranslation([
    "profile/aboutMe",
    "profile/experience",
    "profile/education",
    "profile/hobbies",
  ]);

  const headerHeight = useHeaderHeight();
  const location = useLocation();

  useEffect(() => {
    const handleHashNavigation = () => {
      const sectionId = location.pathname.split("/").pop();
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      }
    };

    handleHashNavigation();
  }, [location]);

  useScrollSpy(
    ["profile", "skills", "experience", "education", "hobbies"], 
    "/profile"
  );
  useScrollUpdateURL('profile');
  
  useSmoothScroll(headerHeight);
  
  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}
      className="bg-blend-multiply"
    >
      {/* Hero Section */}
      <section id="home" className="relative items-center ">
        <HeroSection />
      </section>

      {/* Profile Section */}
      <section id="me" className="relative">
        <Title
          id="me"
          title={t("profile/aboutMe:titleProfile")}
          dot={t("profile/aboutMe:dot")}
          children={t("profile/aboutMe:subTitle")}
          className="text-[#ca5b87] top-0 dark:text-accent-primary"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          light="bg-accent-primary"
          dark="dark:bg-[#462208]"
          sticky
        />
        <AboutMe />
      </section>

      {/* Skills Section */}
      {/* <section className="section top-0 relative"> */}
        <Skills />
      {/* </section> */}

      {/* Work Experience Section */}
      <section id="experience" className="relative">
        <Title
          title={t("profile/experience:titleWorkExperience")}
          dot={t("profile/experience:dot")}
          children={t("profile/experience:subTitleWorkExperience")}
          light="text-bg-secondary bg-[#fff5d7]"
          dark="dark:text-text-accent dark:bg-[#1b0909]"
          sticky
        />
        <WorkExperience />
      </section>

      <section id="education" className="relative">
        <Title
          title={t("profile/education:titleEducation")}
          dot={t("profile/education:dot")}
          children={t("profile/education:subTitleEducation")}
          className="text-text-accent dark:text-[#b5685c] bg-[#fff5d7] dark:bg-[#1b0909]"
          light="bg-[#fff5d7]"
          dark="dark:bg-[#1b0909]"
          sticky
        />
        <Education />
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="mb-20 relative">
        <Title
          title={t("profile/hobbies:titleHobbie")}
          dot={"!"}
          children={t("profile/hobbies:subTitleHobbie")}
          className="top-0"
          subHeadingClassName="text-hover-text px-4"
          sticky
          light="text-[#b67076] bg-[#3e3a19]"
          dark="dark:text-[#931602] dark:bg-[#e68619]"
        />
        <Hobbies />
      </section>
    </div>
  );
};

export default HomePage;
