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
      className=""
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
    >
      <Title
        title={t('blogPostTitle')}
        dot={'.'}
        children={t('subTitleBlogPost')}
        className="text-bg-secondary dark:text-text-accent"
        subHeadingClassName="text-hover-text dark:text-accent-secondary"
        light="bg-[#1e3237]"
        dark="dark:bg-[#435a40] "
        sticky
      />

      <BlogCards />
      {/* <BlogCards /> */}
    </section>
  );
};

export default BlogPage;
