import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';
import Title from '../../components/partials/Title';
import BlogCards from '../../components/news/BlogCards';
const NewsPage = () => {
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
        children={t('subTitleBlogPost')}
        sticky
      />

      <BlogCards />
    </section>
  );
};

export default NewsPage;
