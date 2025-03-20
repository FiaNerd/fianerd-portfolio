import { useTranslation } from 'react-i18next';

const BlogCards = () => {
  const { t } = useTranslation('blogPost');

  return (
    <div className=" max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 px-4 mt-12 mb-12 gap-4 text-center">
      <h1 className="bg-text-primary text-bg-primary pt-9 pb-4px-4 py-8">
        <span className=" text-[2.2em]">
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

      <div>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default BlogCards;
