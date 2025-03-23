import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';
import Title from '../../components/partials/Title';
import BlogCards from '../../components/blog/BlogCards';
const BlogPage = () => {
  const { t } = useTranslation('blogPost');
  const headerHeight = useHeaderHeight();

  useSmoothScroll(headerHeight);

  return (
    <section
      id="blog"
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
    >
      <Title
        title={t('blogPostTitle')}
        dot={'.'}
        children={t('subTitleBlogPost')}
        className="text-bg-secondary dark:text-[#ff7318]"
        subHeadingClassName="text-hover-text dark:text-accent-secondary"
        light="bg-[#1e3237]"
        dark="dark:bg-[#26170d]"
        sticky
      />

      <BlogCards />
    </section>
  );
};

export default BlogPage;
