import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/heroSection/HeroSection";
import Title from "../components/partials/Title";
import AboutMe from "../components/profile/about/AboutMe";
import Education from "../components/profile/education/Education";
import WorkExperience from "../components/profile/experience/WorkExperience";
import Skills from "../components/profile/skills/Skills";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import Hobbies from "../components/hobbies/Hobbies";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation([
    "profile/aboutMe",
    "profile/experience",
    "profile/education",
    "profile/hobbies"
  ]);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  useSmoothScroll(headerHeight ? 0 : headerHeight);

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
      <section id="profile" className="relative">
        <Title
          id="me"
          title={t("profile/aboutMe:titleProfile")}
          dot={t("profile/aboutMe:dot")}
          children={t("profile/aboutMe:subTitle")}
          className="text-[#ca5b87] top-0 dark:text-accent-primary"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          light="bg-accent-secondary"
          dark="dark:bg-stone-950"
          sticky
        />
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="section top-0 relative">
        <Skills />
      </section>

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
          dark="dark:text-accent-primary dark:bg-stone-950"
        />
        <Hobbies />
      </section>
    </div>
  );
};

export default HomePage;