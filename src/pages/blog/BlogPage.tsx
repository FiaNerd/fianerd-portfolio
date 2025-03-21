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
        className="bg-text-primary text-bg-primary"
        subHeadingClassName="text-hover-text dark:text-text-secondary"
        light="bg-bg-primary"
        dark="bg-bg-primary"
        text-bg-primary
        sticky
      />

      <BlogCards />
      {/* <BlogCards /> */}
    </section>
  );
};

export default BlogPage;
