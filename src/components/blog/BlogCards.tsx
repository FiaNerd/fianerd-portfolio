import { useTranslation } from 'react-i18next';
import { IBlogCard } from '../../interfaces/BlogInterface';
import { useNavigate } from 'react-router-dom';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';
import { startTransition } from 'react';

const BlogCards = () => {
  const { t } = useTranslation(['blogPost', 'blogPostCards']);
  const blogCards: IBlogCard[] = t('blogPostCards', {
    returnObjects: true,
  }) as IBlogCard[];

  const navigate = useNavigate();

  const getRandomHSLColor = () => {
    const h = Math.floor(Math.random() * 350);
    const s = Math.floor(Math.random() * 41) + 60;
    const l = Math.floor(Math.random() * 41) + 40;
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  const blogCardsWithColors = blogCards.map((card) => ({
    ...card,
    color: getRandomHSLColor(),
  }));

  const handleNavigate = (urlTitle: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    startTransition(() => {
      navigate(`/blog/${encodeURIComponent(urlTitle)}`);
    });
  };

  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-12 mb-12">
      <h2 className="mb-8 text-bg-secondary dark:text-text-accent font-bold">
        {t('blogYear2025')}
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
        <motion.div
          ref={fadeInLeft.ref}
          initial="hidden"
          animate={fadeInLeft.ctrls}
          variants={fadeInLeft.vars}
          className="flex col-span-1 text-bg-secondary dark:text-text-accent bg-[#1e3237] dark:bg-[#180f08] font-bold p-8 items-center justify-center"
        >
          <div className="text-center">
            <span className="text-[6.6em] leading-[1.6em] block">
              {t('blogPostTitlePart1').toUpperCase()}
            </span>
            <span className="text-[5.5em] leading-[0.3em] block">
              {t('blogPostTitlePart2').toUpperCase()}
            </span>
            <span className="text-[4em] block">
              {t('blogPostTitlePart3').toUpperCase()}
            </span>
          </div>
        </motion.div>

        {blogCardsWithColors.map((card, index) => (
          <motion.div
            ref={fadeInRight.ref}
            initial="hidden"
            animate={fadeInRight.ctrls}
            variants={fadeInRight.vars}
            key={index}
            className="rounded-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="flex flex-col justify-between h-full group p-4 rounded-md">
              <div>
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className="absolute inset-0 rounded-md"
                    style={{
                      backgroundColor: card.color,
                      opacity: 0.5, // Set opacity separately
                      transition: 'opacity 0.3s',
                    }}
                  ></div>
                  <span className="absolute top-2 left-2 text-bg-secondary dark:text-text-accent text-xl font-bold bg-[#1e3237] dark:bg-[#180f08] px-2 rounded-md">
                    {card.suffix}
                  </span>
                </div>

                <div className="pb-2 mb-2">
                  <h5 className="font-semibold mb-0 ml-4">{card.month}</h5>
                  <h4 className="text-bg-secondary dark:text-text-accent font-bold leading-none mb-4 ml-4">
                    {card.day}
                  </h4>
                  <h5 className="text-xl font-semibold mb-1">{card.title}</h5>
                  <p>{card.titleDescription}</p>
                  <p className="text-sm mt-1">
                    {card.content.length > 160
                      ? `${card.content.substring(0, 160)}...`
                      : card.content}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-auto border-t border-text-primary">
                <button
                  onClick={() => handleNavigate(card.urlTitle)}
                  className="font-sub-heading text-end font-bold text-nav-text hover:text-nav-hover hover:underline hover:underline-offset-4 cursor-pointer mt-2"
                  aria-label={`Read more about ${card.title}`}
                >
                  {t('readMore')}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
