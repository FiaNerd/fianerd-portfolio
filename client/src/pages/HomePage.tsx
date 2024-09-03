import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <h1 className='bg-primary text-primary md:text-4xl font-heading font-black'>
        {t('title')}
      </h1>
      <h2>{t('intro')}</h2>
      <p>{t('bio')}</p>
    </>
  );
};

export default HomePage;
