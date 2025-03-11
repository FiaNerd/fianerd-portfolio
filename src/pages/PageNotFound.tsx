import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageNotFoundBackground from '../components/pageNotFound/PageNotFoundBackground';
import Button from '../components/partials/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('partialTranslation');

  const goBack = () => {
    navigate && navigate(-1);
  };

  return (
    <div className=" items-center justify-center w-full h-full flex flex-col px-4 "
        style={{ transition: "padding-top 0.3s ease",}}>
        <PageNotFoundBackground />

          <div className="w-full max-w-3xl p-4">
            <div className="text-center flex flex-col justify-center md:justify-end items-center space-y-4 py-8">
              <h1 className="text-text-primary text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-snug" 
                dangerouslySetInnerHTML={{ __html: t("pageNotFoundTitle")}}
              >
              </h1>
              <h5>{t('pageNotFoundMessage')}</h5>
            </div>

          <div className="flex justify-center mx-auto items-center ">
                <Button
                    onClick={goBack}
                    className="max-w-xs inline-flex justify-center gap-2 text-xl transition-all duration-200 hover:scale-105 dark:text-text-primary border-2 hover:dark:border-[#203842] dark:border-text-primary dark:bg-[#203842] hover:bg-[#6f4a69] dark:hover:bg-[#203842] dark:hover:text-[#d46947] py-2 md:py-4 "
                    >
                    <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
                    {t("goBack").toUpperCase()}
                </Button>

          </div>

          </div>
              
    </div>
  );
};

export default PageNotFound;