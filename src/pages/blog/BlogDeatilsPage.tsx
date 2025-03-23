import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';
import { IBlogCard, IBlogDetails } from '../../interfaces/BlogCardInterface';
import { Icon } from '@iconify/react';
import HeroDetails from '../../components/portfolios/HeroDetails';

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
            <div className="flex flex-col">
              <div className="flex flex-rows text-center items-center gap-4 ">
                <div className="border-r-2 border-[#3C2F2F] mb-2">
                  <h5 className="font-semibold px-2 mb-0 leading-0">
                    {blog.month}
                  </h5>
                  <h4 className="text-bg-secondary dark:text-text-accent font-bold px-2 leading-none">
                    {blog.day}
                  </h4>
                </div>

                <h1 className="text-[#3C2F2F] text-3xl md:text-5xl font-bold">
                  {blog.title}
                </h1>
              </div>
              <p className="text-[#695050]">{blog.titleDescription}</p>

              <div className="border border-[#3C2F2F] mb-8"></div>

              <div className="flex flex-col mb-8 border-r-2 border-[#3C2F2F]">
                <p
                  className="text-lg text-text-primary leading-8 max-h-[30em] overflow-y-auto px-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
              <div className="border border-[#3C2F2F] mb-8"></div>
            </div>

            {/* Technologies and Key Features Column */}
            <div className="bg-[#000] p-4 lg:col-span-1">
              <div className="mb-8 ">
                <h5 className="dark:text-black font-bold highlight  highlight-bg-secondary dark:highlight-text-accent highlight-variant-18 highlight-spread-x-xl highlight-spread-y-sm">
                  {blog.titleTeche}
                </h5>
                <div>
                  {Array.isArray(blog.technologies) &&
                    blog.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="text-sm tracking-wide text-hover-text dark:text-text-primary"
                      >
                        {tech}
                      </p>
                    ))}
                </div>
              </div>

              <div className="mb-8">
                <h5 className="dark:text-black font-bold highlight highlight-bg-secondary dark:highlight-text-accent highlight-variant-18 highlight-spread-x-xl highlight-spread-y-sm">
                  {blog.titleKeyFeature}
                </h5>
                <div>
                  {Array.isArray(blog.keyFeatures) &&
                    blog.keyFeatures.map((feature: string, index: number) => (
                      <p
                        key={index}
                        className="text-sm tracking-wide text-hover-text dark:text-text-primary"
                      >
                        {feature}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
