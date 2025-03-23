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
          image={blog.img}
          titleDescription={blog.titleDescription}
          light="text-bg-secondary"
          dark="dark:text-[#ff7318]"
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
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:space-y-8 gap-8 items-center">
            <img src={blog.img} alt="" />
            <div>
              <h1 className="text-[#3C2F2F] text-3xl md:text-5xl font-bold">
                {blog.title}
              </h1>
              <p className="text-[#695050]">{blog.titleDescription}</p>

              <div className="border border-[#3C2F2F] mb-8"></div>

              <div className="flex flex-col mb-8 border-r-2 border-[#3C2F2F]">
                <p
                  className="text-lg leading-8 max-h-[30em] overflow-y-auto px-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
              <div className="border border-[#3C2F2F]"></div>

              <div className="flex justify-center py-2 mb-12 lg:mb-0 mx-auto">
                <div className="border-r-2 border-[#3C2F2F]">
                  <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
                    {blog.keyFeature}
                  </p>

                  <ul className="flex items-center space-x-4 justify-center px-2 lg:px-8">
                    {blog.technologies &&
                      blogDetails.map((item: any, index: number) => (
                        <li
                          key={index}
                          className="justify-center items-center flex flex-col cursor-pointer"
                        >
                          <NavLink
                            to={item.url}
                            className="flex flex-col items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              icon={item.icon}
                              width="24"
                              height="24"
                              className="text-btn-bg hover:text-bg-hover"
                            />
                            <p className="text-xs font-light tracking-wider text-text-primary">
                              {item.type}
                            </p>
                          </NavLink>
                        </li>
                      ))}
                  </ul>
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
