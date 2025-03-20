import { useTranslation } from 'react-i18next';
import { IBlogCard } from '../../interfaces/BlogCardInterface';
import { Icon } from '@iconify/react';

const BlogCards = () => {
  const { t } = useTranslation('blogPost');

  // Get the blogCards array from the translation
  const blogCards: IBlogCard[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogCard[];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12 mb-12 h-62">
      <div className="flex flex-col gap-4 lg:flex-row">
        <h2>{t('blogYear2025')}</h2>
        <div className="flex-1 text-center">
          <h1 className="bg-text-primary text-bg-primary px-4 pb-8 flex items-center justify-center h-full">
            <div className="text-center">
              <span className="text-[2.2em]">
                {t('blogPostTitlePart1').toUpperCase()}
              </span>
              <br />
              <span className="leading-[0.5em] text-[1.6em]">
                {t('blogPostTitlePart2').toUpperCase()}
              </span>
              <br />
              <span className="text-[1em]">
                {t('blogPostTitlePart3').toUpperCase()}
              </span>
            </div>
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex-4 w-auto lg:w-3/4">
          <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {blogCards.map((card, index) => (
              <li key={index} className="grid flex-col md:flex-rows gap-4 ">
                <div className="flex flex-col md:flex-row lg:flex-col md:gap-8 md:justify-center md:items-center lg:items-start">
                  <div className="md:flex md:flex-row-reverse lg:flex-col md:justify-between md:items-center lg:items-start">
                    <div className="flex flex-col md:flex-row-reverse lg:flex-col justify-center items-center md:items-start lg:items-start">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="px-4 ">
                        <h6 className="text-lg mb-0 font-bold ">
                          {card.month}
                        </h6>
                        <h6 className="text-xl text-bg-secondary dark:text-text-accent mb-0 font-bold">
                          {card.day}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xl mb-0 font-semibold px-4">
                      {card.title}
                    </h5>
                    <p className="px-4 mb-0 border-b border-text-primary py-2">
                      {card.content}
                    </p>
                    <a
                      href={card.httpHomepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 pb-2 flex justify-end"
                    >
                      {t('readMore')}
                    </a>
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
