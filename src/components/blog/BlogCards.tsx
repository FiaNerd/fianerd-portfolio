import { useTranslation } from 'react-i18next';
import { IBlogCard } from '../../interfaces/BlogCardInterface';

const BlogCards = () => {
  const { t } = useTranslation(['blogPost', 'blogPostCards']);
  const blogCards: IBlogCard[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogCard[];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12 mb-12">
      <h2 className="text-center mb-8 text-3xl font-bold">
        {t('blogYear2025')}
      </h2>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-4">
        {/* Introduction Section */}
        <h1 className="bg-text-primary text-bg-primary p-8 flex items-center justify-center lg:col-span-1">
          <div className="text-center">
            <span className="text-[2.2em] block">
              {t('blogPostTitlePart1').toUpperCase()}
            </span>
            <span className="leading-[0.5em] text-[1.6em] block">
              {t('blogPostTitlePart2').toUpperCase()}
            </span>
            <span className="text-[1em] block">
              {t('blogPostTitlePart3').toUpperCase()}
            </span>
          </div>
        </h1>

        {/* Blog Cards Section */}
        <div className="lg:col-span-3">
          <ul className="flex flex-col gap-8 md:grid md:grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-8">
            {blogCards.map((card, index) => (
              <li
                key={index}
                className="hover:shadow-lg rounded-lg transition-shadow duration-300 flex flex-col justify-between w-full"
              >
                <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-8 lg:gap-4">
                  {/* Layout for md screens */}
                  <div className="flex flex-col md:flex-row-reverse lg:flex-col gap-4">
                    {/* Image */}
                    <div className="w-full md:w-64 lg:w-full flex-shrink-0">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* Date */}
                    <div className="flex flex-col items-start px-2">
                      <h6 className="text-lg font-bold">{card.month}</h6>
                      <h6 className="text-xl text-bg-secondary dark:text-text-accent font-bold">
                        {card.day}
                      </h6>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col justify-between flex-1 w-full px-2 pb-2">
                    <div>
                      <h5 className="text-xl font-semibold mb-2">
                        {card.title}
                      </h5>
                      <p className="text-sm mb-4">
                        {card.content.length > 160
                          ? `${card.content.substring(0, 160)}...`
                          : card.content}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="flex justify-end">
                      <a
                        href={card.httpHomepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-nav-text hover:text-nav-hover hover:underline cursor-pointer"
                      >
                        {t('readMore')}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
