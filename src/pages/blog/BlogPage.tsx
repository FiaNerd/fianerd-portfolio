import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';
import Title from '../../components/partials/Title';
import BlogCards from '../../components/blog/BlogCards';
import useScrollUpdateURL from '../../hook/useScrollUpdate';
const BlogPage = () => {
  const { t } = useTranslation('blogPost');
  const { headerHeight } = useHeaderHeight();

  useScrollUpdateURL(['blog'], '');

  return (
    <section
      id="blog"
      className="relative w-full overflow-hidden"
      style={{
        marginTop: `${headerHeight}px`,
        transition: 'top 0.3s ease',
      }}
    >
      <Title
        title={t('blogPostTitle')}
        dot={'.'}
        children={t('subTitleBlogPost')}
        className="text-bg-secondary dark:text-text-accent leading-none"
        subHeadingClassName="text-hover-text dark:text-text-secondary leading-none"
        light="bg-[#1e3237]"
        dark="dark:bg-[#180f08]"
        sticky
      />

      <BlogCards />
    </section>
  );
};

export default BlogPage;
