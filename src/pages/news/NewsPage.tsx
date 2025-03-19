import React, { useEffect } from 'react';
import Title from '../../components/partials/Title';
import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';

const NewsPage = () => {
    const {t} = useTranslation('news');
    const headerHeight = useHeaderHeight();
    
    // useEffect(() => {
    //     const handleHashNavigation = () => {
    //       const sectionId = location.pathname.split("/").pop();
    //       if (sectionId) {
    //         const element = document.getElementById(sectionId);
    //         if (element) {
    //           element.scrollIntoView({ behavior: "smooth" });
    //         } else {
    //           console.warn(`Section with ID "${sectionId}" not found.`);
    //         }
    //       }
    //     };
    
    //     handleHashNavigation();
    //   }, [location]);
    
    //   useScrollSpy(
    //     ["profile", "skills", "experience", "education", "hobbies"], 
    //     "/profile"
    //   );
      
    //   useScrollUpdateURL('profile');
      
      useSmoothScroll(headerHeight);

  return (
    <section id="news" className='"max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 px-4' style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}>
        <div className='gap-4'>
            <h1 className="bg-text-primary text-bg-primary text-center" dangerouslySetInnerHTML={{__html: t('newsTitle')}} />
        </div>
        {/* <Title 
            title={t('newsTitle')} 
            children={t('subTitleNews')} 
            dot="."
            className="text-[#06314f] top-0 dark:text-accent-primary"
            subHeadingClassName="text-hover-text dark:text-text-secondary"
            light="bg-none"
            dark="dark:bg-[#462208]"
            sticky    
        /> */}
      <div className="container mx-auto">

      </div>
    </section>
  );
};

export default NewsPage;