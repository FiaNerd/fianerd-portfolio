import { useTranslation } from 'react-i18next';
import HeroSection from '../components/heroSection/HeroSection';
import Hobbies from '../components/hobbies/Hobbies';
import Title from '../components/partials/Title';
import AboutMe from '../components/profile/about/AboutMe';
import Education from '../components/profile/education/Education';
import WorkExperience from '../components/profile/experience/WorkExperience';
import Skills from '../components/profile/skills/Skills';
import useScrollUpdateURL from '../hook/useScrollUpdateURL';
import { startTransition, useEffect, useRef, useState } from 'react';
import { handleHashNavigation } from '../utils/handleHashNavigation';

const HomePage = ({ headerHeight }: { headerHeight: number }) => {
  const { t } = useTranslation([
    'profile/aboutMe',
    'profile/experience',
    'profile/education',
    'profile/hobbies',
  ]);
  const [isNavigating, setIsNavigating] = useState(false);

  const sectionIds = [
    'home',
    'who-am-i',
    'web-skills',
    'graphic-skills',
    'additional-skills',
    'programs-and-softwares',
    'experience',
    'education',
    'hobbies',
  ];

  const isNavigatingRef = useRef(isNavigating);

  useEffect(() => {
    isNavigatingRef.current = isNavigating; // Keep ref in sync with state
  }, [isNavigating]);

  useEffect(() => {
    startTransition(() => {});
    handleHashNavigation({
      sectionIds,
      headerHeight,
      isHeaderVisible: true,
      isNavigating: isNavigatingRef,
      onNavigationComplete: () => {
        setIsNavigating(false); // Update state
      },
    });
  }, [headerHeight]);

  // Update the URL when scrollin
  useScrollUpdateURL(sectionIds, 'profile', headerHeight);

  return (
    <div className="bg-blend-multiply">
      {/* Hero Section */}
      <section id="home" className="relative">
        <HeroSection />
      </section>

      {/* Profile Section */}
      <section id="who-am-i" className="relative">
        <Title
          title={t('profile/aboutMe:titleProfile')}
          dot={t('profile/aboutMe:dot')}
          children={t('profile/aboutMe:subTitle')}
          className="text-[#ca5b87] top-0 dark:text-accent-primary"
          subHeadingClassName="text-hover-text dark:text-text-secondary"
          light="bg-accent-primary"
          dark="dark:bg-[#462208]"
          sticky
        />
        <AboutMe />
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Work Experience Section */}
      <section id="experience" className="relative">
        <Title
          title={t('profile/experience:titleWorkExperience')}
          dot={t('profile/experience:dot')}
          children={t('profile/experience:subTitleWorkExperience')}
          light="text-bg-secondary bg-[#fff5d7]"
          dark="dark:text-text-accent dark:bg-[#1b0909]"
          sticky
        />
        <WorkExperience />
      </section>

      {/* Education Section */}
      <section id="education" className="relative">
        <Title
          title={t('profile/education:titleEducation')}
          dot={t('profile/education:dot')}
          children={t('profile/education:subTitleEducation')}
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
          title={t('profile/hobbies:titleHobbie')}
          dot={'!'}
          children={t('profile/hobbies:subTitleHobbie')}
          className=""
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
