import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';
import { Icon } from '@iconify/react';
import HeroDetails from '../../components/portfolios/HeroDetails';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogContent from '../../components/blog/BlogContent';
import BlogSidebar from '../../components/blog/BlogSidebar';
import { IBlogContentProps, IBlogDetails } from '../../interfaces/BlogInterface';

const BlogDetailsPage = () => {
  const { t } = useTranslation([
    'blogPost',
    'blogPostCards',
    'partialTranslation',
  ]);
  const headerHeight = useHeaderHeight();
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const navigate = useNavigate();

  const blogDetails: IBlogDetails[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogDetails[];

  const blogContent: IBlogContentProps[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogContentProps[];

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
      className="bg-blend-multiply "
    >
      <div className="mb-8">
        <HeroDetails
          title={blog.title}
          image={blog.img || ''}
          titleDescription={blog.titleDescription}
          light="text-bg-secondary"
          dark="dark:text-text-accent"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="flex flex-col items-start lg:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
          >
            <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
            {t('partialTranslation:goBack')}
          </button>
        </div>

        {/* Blog Content */}
        <div className="mt-8">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-[40%_40%_20%] items-center lg:space-y-8 gap-8 ">
            {/* Image Column */}
            <div className="lg:col-span-1">
              <img src={blog.img} alt="" className="w-full h-auto" />
            </div>

            {/* Title and Content Column */}
            <div className="lg:col-span-1">
              <BlogHeader
                title={blog.title}
                month={blog.month}
                day={blog.day}
                titleDescription={blog.titleDescription}
              />
              <BlogContent
                content={blog.content || ''}
                suffix={blog.suffix || ''}
                http={blog.httpHomepage || ''}
                icon={
                  blog.icon || {
                    name: 'mdi:web',
                    width: 24,
                    height: 24,
                    color: '#000',
                  }
                } // Default icon if none is provided
              />
            </div>

            {/* Technologies and Key Features Column */}
            <div className="mb-12">
              <BlogSidebar
                titleTeche={blog.titleTeche}
                technologies={blog.technologies || []}
                titleKeyFeature={blog.titleKeyFeature || ''}
                keyFeatures={blog.keyFeatures || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
