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
    <div className="max-w-screen-xl justify-center w-full h-full flex flex-col px-4 "
        style={{ paddingTop: `${headerHeight}px`, transition: "padding-top 0.3s ease",}}>
          
        <h1 className="text-center text-[#350712] dark:text-text-accent text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-4 font-bold leading-snug lg:mb-12" 
        dangerouslySetInnerHTML={{ __html: t("pageNotFound") }}
        >
        </h1>
    <div className=" mx-auto">
          <Button
              onClick={goBack}
              className="inline-flex gap-2 text-xl transition-all duration-200 hover:scale-105 text-bg-primary bg-[#6f4a69] dark:hover:text-bg-hover bg-transparent w-auto py-1 "
              >
              <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
              {t("goBack").toUpperCase()}
          </Button>

    </div>
              
    </div>
  );
};

export default PageNotFound;