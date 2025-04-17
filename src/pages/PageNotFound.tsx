import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageNotFoundBackground from '../components/pageNotFound/PageNotFoundBackground';
import Button from '../components/partials/Button';
import { startTransition } from 'react';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const goBack = () => {
    startTransition(() => {
      navigate(-1);
    });
  };

  return (
    <div
      className=" items-center justify-center w-full h-full flex flex-col px-4 "
      style={{ transition: 'padding-top 0.3s ease' }}
    >
      <PageNotFoundBackground />

      <div className="w-full max-w-3xl p-4">
        <div className="text-center flex flex-col justify-center md:justify-end items-center space-y-4 py-8">
          <h1
            className="text-text-primary text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-snug"
            dangerouslySetInnerHTML={{ __html: t('pageNotFoundTitle') }}
          ></h1>
          <h5 className="text-text-primary">{t('pageNotFoundMessage')}</h5>
        </div>

        <div className="flex justify-center mx-auto items-center ">
          <Button
            onClick={goBack}
            className="max-w-xs inline-flex justify-center gap-2 text-xl transition-all duration-200 hover:scale-105 text-text-primary dark:text-bg-primary hover:text-hover-text dark:hover:text-bg-primary bg-accent-secondary hover:bg-accent-primary dark:bg-text-accent dark:hover:bg-accent-primary border-2 border-text-primary dark:border-bg-primary hover:border-hover-text dark:hover:border-bg-primary py-2 md:py-4 "
          >
            <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
            {t('goBack').toUpperCase()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
