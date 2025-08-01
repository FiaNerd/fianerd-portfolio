import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IBlogDetails } from '../../interfaces/BlogInterface';
import { Icon } from '@iconify/react';
import HeroDetails from '../../components/partials/HeroDetails';
import ContentTitleDetails from '../../components/partials/ContentTitleDetails';
import BlogSidebar from '../../components/blog/BlogSidebar';
import ContentDetails from '../../components/partials/ContentDetails';
import LoadingSpinner from '../../components/partials/LoadingSpinner';
import Button from '../../components/partials/Button';

const BlogDetailsPage = ({ headerHeight }: { headerHeight: number }) => {
  const { t, ready } = useTranslation(['blogPost', 'blogPostCards', 'common']);
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const navigate = useNavigate();

  const blogDetails: IBlogDetails[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogDetails[];

  if (!blogDetails || blogDetails.length === 0) {
    console.error('No blog details found.');
    return <div>{t('noBlogPost', 'No blog posts available.')}</div>;
  }
  const blog = blogDetails.find((blog) => blog.urlTitle === urlTitle);

  console.log('blog', blog);

  if (!blog) {
    console.error('Blog post not found:', urlTitle);
    return <div>{t('noBlogPost', 'Blog post not found.')}</div>;
  }

  const handleNavigate = () => {
    window.scrollTo({
      top: headerHeight,
      behavior: 'smooth',
    });
    navigate(`/blog`);
  };

  if (!ready) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-blend-multiply">
      <div className="mb-8">
        <HeroDetails
          title={blog.title}
          image={blog.img || ''}
          subTitle={blog.titleDescription}
          light="text-bg-secondary"
          dark="dark:text-text-accent"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col items-start lg:flex-row mb-8 ">
          <Button
            variant="text"
            onClick={handleNavigate}
            className="inline-flex items-center gap-2 transition-all duration-200 hover:scale-105 w-auto"
          >
            <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
            {t('common:goBack').toUpperCase()}
          </Button>
        </div>

        {/* Blog Content */}
        <div className="mt-8">
          <div className="jusify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[40%_35%_auto] items-center lg:space-y-8 gap-8">
            {/* Image Column */}
            <div className="lg:col-span-1">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Title and Content Column */}
            <div className="lg:col-span-1">
              <ContentTitleDetails
                title={blog.title}
                month={blog.month}
                day={blog.day}
                subTitle={blog.titleDescription}
              />

              <ContentDetails
                content={blog.content || ''}
                suffix={blog.suffix || ''}
                http={blog.httpHomepage || ''}
                icon={
                  blog.icon || {
                    name: 'mdi:web',
                    width: 24,
                    height: 24,
                    color: '#fff',
                  }
                }
                privateText={blog.privateText || ''}
              />
            </div>

            {/* Technologies and Key Features Column */}
            <div className="mb-12 w-full lg:col-span-full xl:col-span-1">
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
