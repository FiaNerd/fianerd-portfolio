import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import Title from '../../components/partials/Title';
import BlogCards from '../../components/blog/BlogCards';
import useScrollUpdateURL from '../../hook/useScrollUpdateURL';
import { useEffect, useRef, useState } from 'react';
import { handleHashNavigation } from '../../utils/handleHashNavigation';

const BlogPage = () => {
  const { t } = useTranslation('blogPost');
  const { headerHeight } = useHeaderHeight();
  const [isNavigating, setIsNavigating] = useState(false);
  const isNavigatingRef = useRef(isNavigating);

  // Ensure that the ref is updated when the state changes
  useEffect(() => {
    isNavigatingRef.current = isNavigating;
  }, [isNavigating]);

  // Use effect for handling hash navigation
  useEffect(() => {
    const handleNavigation = () => {
      setIsNavigating(true);
      handleHashNavigation({
        sectionIds: ['blog'], // Ensure these are correct section IDs
        headerHeight,
        isHeaderVisible: false,
        isNavigating: isNavigatingRef,
        onNavigationComplete: () => {
          setIsNavigating(false); // Set to false once navigation is done
        },
      });
    };

    handleNavigation();
  }, [headerHeight, isNavigating]);

  // Update the URL when scrolling
  useScrollUpdateURL(['blog'], 'blog', headerHeight);

  return (
    <section
      id="blog"
      className="relative w-full overflow-hidden"
      style={{
        marginTop: `${headerHeight}px`,
        transition: 'top 0.3s ease',
        overflowX: 'hidden',
        height: '100vh',
       
      }}
    >
      <Title
        title={t('blogPostTitle')}
        dot={'.'}
        children={t('subTitleBlogPost')}
        className=" leading-none"
        subHeadingClassName="text-hover-text dark:text-text-secondary leading-none"
        light="text-bg-secondary bg-[#1e3237]"
        dark="dark:text-text-accent dark:bg-[#180f08]"
        sticky
      />

      <BlogCards />
    </section>
  );
};

export default BlogPage;
