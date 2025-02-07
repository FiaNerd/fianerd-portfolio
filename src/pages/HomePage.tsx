import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/heroSection/HeroSection";
import Hobbies from "../components/hobbies/Hobbies";
import Title from "../components/partials/Title";
import AboutMe from "../components/profile/about/AboutMe";
import Education from "../components/profile/education/Education";
import WorkExperience from "../components/profile/experience/WorkExperience";
import Skills from "../components/profile/skills/Skills";
import { useSmoothScroll } from "../hook/useSmoothScroll";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation([
    "Profile/aboutMe",
    "Profile/experience",
    "Profile/education",
    "Profile/hobbies"
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
      <section id="home" className="relative items-center">
        <HeroSection />
      </section>

      {/* Profile Section */}
      <section id="profile">
        <Title
          id="me"
          title={t("Profile/aboutMe:titleProfile")}
          dot={t("Profile/aboutMe:dot")}
          children={t("Profile/aboutMe:subTitle")}
          className="text-[#ca5b87] top-0 dark:text-accent-primary bg-accent-secondary dark:bg-amber-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          sticky
        />
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="section top-0 ">
        <Skills />
      </section>

      {/* Work Experience Section */}
      <section id="experience">
        <Title
          title={t("Profile/experience:titleWorkExperience")}
          dot={t("Profile/experience:dot")}
          children={t("Profile/experience:subTitleWorkExperience")}
          className="text-bg-secondary dark:text-text-accent bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <WorkExperience />
      </section>

      <section id="education">
        <Title
          title={t("Profile/education:titleEducation")}
          dot={t("Profile/education:dot")}
          children={t("Profile/education:subTitleEducation")}
          className="text-text-accent dark:text-[#b5685c] bg-[#fff5d7] dark:bg-[#1b0909]"
          sticky
        />
        <Education />
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="mb-20">
        <Title
          title={t("Profile/hobbies:titleHobbie")}
          dot={"!"}
          children={t("Profile/hobbies:subTitleHobbie")}
          className="text-[#b67076] top-0 dark:text-accent-primary bg-[#3e3a19] dark:bg-stone-950"
          subHeadingClassName="text-hover-text dark:text-text-secondary px-4"
          sticky
        />
        <Hobbies />
      </section>
    </div>
  );
};

export default HomePage;