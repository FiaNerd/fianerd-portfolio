import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';
import { IBlogCard, IBlogDetails } from '../../interfaces/BlogCardInterface';
import { Icon } from '@iconify/react';
import HeroDetails from '../../components/portfolios/HeroDetails';

const BlogDetailsPage = () => {
  const { t } = useTranslation(['blogPost', 'blogPostCards']);
  const headerHeight = useHeaderHeight();
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const navigate = useNavigate();

  const blogDetails: IBlogDetails[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogDetails[];

  const blog = blogDetails.find((blog) => blog.urlTitle === urlTitle);

  useSmoothScroll(headerHeight);

  if (!blog) {
    return <div>{t('noBlogPost')}</div>;
  }

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
      className="bg-blend-multiply max-w-screen-xl mx-auto px-4"
    >
      <div className="mb-8">
        <HeroDetails
          title={blog.title}
          image={blog.img}
          titleDescription={blog.titleDescription}
          light="text-bg-secondary"
          dark="dark:text-[#ff7318]"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-start lg:flex-row">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
        >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          {t('goBack')}
        </button>
      </div>

      {/* Blog Content */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-bg-secondary dark:text-[#ff7318]">
          {blog.title}
        </h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
