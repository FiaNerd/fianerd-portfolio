import { useTranslation } from 'react-i18next';
import { IBlogCard } from '../../interfaces/BlogCardInterface';
import { NavLink } from 'react-router-dom';

const BlogCards = () => {
  const { t } = useTranslation(['blogPost', 'blogPostCards']);
  const blogCards: IBlogCard[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogCard[];

  console.log('blogPostCards', blogCards);

  // Function to generate random color in HSL format
  const getRandomHSLColor = () => {
    const h = Math.floor(Math.random() * 350); // Hue (0-350)
    const s = Math.floor(Math.random() * 41) + 60; // Saturation (60-100%)
    const l = Math.floor(Math.random() * 41) + 40; // Lightness (40-80%)
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12 mb-12">
      <h2 className="mb-8 text-3xl font-bold">{t('blogYear2025')}</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        {/* Title Column */}
        <div className="flex col-span-1 text-bg-secondary dark:text-text-accent bg-[#1e3237] dark:bg-[#435a40] font-bold p-8 items-center justify-center">
          <div className="text-center">
            <span className="text-[6.6em] leading-[1.3em] block">
              {t('blogPostTitlePart1').toUpperCase()}
            </span>
            <span className="text-[5.5em] leading-[0.3em] block">
              {t('blogPostTitlePart2').toUpperCase()}
            </span>
            <span className="text-[4em] block">
              {t('blogPostTitlePart3').toUpperCase()}
            </span>
          </div>
        </div>

        {/* Blog Cards */}
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-col justify-between h-full group ">
              <div className="relative group flex w-full ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div
                  className="absolute inset-0 opacity-40 hover:opacity-0 rounded-md"
                  style={{ backgroundColor: getRandomHSLColor() }}
                ></div>
                <span className="absolute text-bg-secondary dark:text-text-accent text-xl font-bold bg-black bg-opacity-80 px-2">
                  {card.suffix}
                </span>
              </div>

              <div className="flex flex-col justify-between w-full px-2 mb-0 ">
                <div className="border-b border-text-primary py-2">
                  <div>
                    <h5 className="font-semibold px-2 mb-0 leading-0">
                      {card.month}
                    </h5>
                    <h4 className="text-bg-secondary dark:text-text-accent font-bold px-2 leading-none">
                      {card.day}
                    </h4>
                  </div>
                  <h5 className="text-xl font-semibold">{card.title}</h5>
                  <p className="text-sm">
                    {card.content.length > 160
                      ? `${card.content.substring(0, 160)}...`
                      : card.content}
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <NavLink
                    to={''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nav-text hover:text-nav-hover hover:underline cursor-pointer"
                  >
                    {t('readMore')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
