import { useTranslation } from 'react-i18next';
import { IBlogCard } from '../../interfaces/BlogCardInterface';

const BlogCards = () => {
  const { t } = useTranslation('blogPost');

  // Get the blogCards array from the translation
  const blogCards: IBlogCard[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogCard[];

  return (
    <div className="max-w-screen-xl mx-auto h-[60px] px-4 mt-12 mb-12">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Featured Title (h1) */}
        <div className="flex-1 text-center">
          <h1 className="bg-text-primary text-bg-primary px-4 pb-8">
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
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex-3 lg:w-3/4">
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogCards.map((card, index) => (
              <li
                key={index}
                className="flex flex-col gap-4bg-gray-100 rounded-lg shadow-lg"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <h6 className="text-xl font-bold px-4">{card.id}</h6>
                <h6 className="text-xl font-bold px-4">{card.title}</h6>
                <p className="px-4">{card.date}</p>
                <p className="px-4">{card.content}</p>
                <a
                  href={card.httpHomepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 text-blue-600"
                >
                  {t('readMore')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
