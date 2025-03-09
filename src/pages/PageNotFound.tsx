import { Icon } from '@iconify/react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';
import useHeaderHeight from '../hook/useHeaderHeight';
import Button from '../components/partials/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  const headerHeight = useHeaderHeight()
  const { t } = useTranslation('partialTranslation');

  const goBack = () => {
    navigate && navigate(-1);
  };

  return (
    <div className=" items-center justify-center w-full h-full flex flex-col px-4 bg-[url('./assets/images/404-notfound-dark.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[#0d1117]"
        style={{ paddingTop: `${headerHeight}px`, transition: "padding-top 0.3s ease",}}>
          <div className="w-full max-w-3xl p-20 border-2 border-[#203842] bg-transperant dark:border-[#203842] rounded-lg shadow-lg  p-4">
            <div className="text-center flex flex-col justify-center items-center space-y-4 py-8">
              <h1 className="text-text-primary text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-snug" 
                dangerouslySetInnerHTML={{ __html: t("pageNotFoundTitle")}}
              >
              </h1>
              <p>{t('pageNotFoundMessage')}</p>
            </div>

          <div className="flex mx-auto items-center ">
                <Button
                    onClick={goBack}
                    className="inline-flex mx-auto gap-2 text-xl item-center transition-all duration-200 hover:scale-105 text-[#6f4a69] dark:text-[#2e4a5f] border-4 border-[#6f4a69] dark:border-[#203842] hover:bg-[#6f4a69] dark:hover:bg-[#203842] dark:hover:text-nav-hover bg-transparent py-1 "
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