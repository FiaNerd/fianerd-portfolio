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
  const { t } = useTranslation(["profileTitle", "skillsTitle", "workTitle", "educationTitle", "hobbiesTitle"]);

  useEffect(() => {
    const header = document.getElementById("header");

      const handleResize = () => {
        const height = header?.getBoundingClientRect().height || 0;
        setHeaderHeight(height);
      };
    
    // Set the initial header height on mount
    handleResize();

    // Add resize event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this only runs on mount

  useSmoothScroll();

  useEffect(() => {
    if (location.pathname === '/#') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div 
        style={{
          paddingTop: `${headerHeight}px`, 
          transition: "padding-top 0.3s ease", 
        }}
        className="bg-blend-multiply"
      >

        <SectionPlate id="home" className="relative">
          <HeroSection />
        </SectionPlate>
      </div>

        <SectionPlate id="profile">
        <Title
              id="me"
              title={t("profileTitle:titleProfile")}
              dot={t("profileTitle:dot")}
              children={t("profileTitle:intro")}
              className="text-[#ca5b87] dark:text-accent-primary bg-accent-secondary dark:bg-amber-950"
              subHeadingClassName="text-hover-text dark:text-text-secondary"
              sticky={true}
            />
            
          <AboutMe />
        </SectionPlate>

        <SectionPlate id="skills">
        <Title 
            id="profile"
            title={t('skillsTitle:titleSkills')} 
            dot={t('skillsTitle:dot')} 
            children={t('skillsTitle:subTitleSkills')} 
            className="text-[#535437] dark:text-[#69864e] bg-[#fff5d7] dark:bg-[#1b0909]" 
            sticky={true}/> 
          <Skills />
        </SectionPlate>

        <SectionPlate id="work-experience">
        <Title
            id="experience"
            title={t("workTitle:titleWorkExperience")}
            dot={t("workTitle:dot")}
            children={t("workTitle:subTitleWorkExperience")}
            className="text-bg-secondary dark:text-text-accent bg-[#fff5d7] dark:bg-[#1b0909]"
            sticky={true}
          />

          <WorkExperience />
        </SectionPlate>

        <SectionPlate id="education">
        <Title 
            id="education" 
            title={t("educationTitle:titleEducation")} 
            dot={t("educationTitle:dot")} 
            children={t("educationTitle:subTitleEducation")} 
            className="text-text-accent dark:text-[#b5685c]  bg-[#fff5d7] dark:bg-[#1b0909]" 
            sticky={true}/>
 
          <Education />
        </SectionPlate>

        <SectionPlate id="hobbies">
        <Title 
                id={'hobbies'} 
                title={t('hobbiesTitle:titleHobbie')} 
                dot={'!'} 
                children={t('hobbiesTitle:subTitleHobbie')} 
                className="text-hover-text dark:text-accent-primary bg-slate-900 dark:bg-stone-950" 
                subHeadingClassName="text-hover-text dark:text-text-secondary px-4" 
                sticky={true} 
            />
          <Hobbies />
        </SectionPlate>

    </>
  );
};

export default HomePage;
