import { Icon } from '@iconify/react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import {  useNavigate } from 'react-router-dom';
import useHeaderHeight from '../hook/useHeaderHeight';

const PageNotFound = () => {
  const navigate = useNavigate();
  const headerHeight = useHeaderHeight()
  const { t } = useTranslation('partialTranslation');

  const goBack = () => {
    navigate && navigate(-1);
  };

  return (
    <div className="max-w-screen-xl w-full h-full flex flex-col px-4 mx-auto"
        style={{ marginTop: `${headerHeight}px`, transition: "padding-top 0.3s ease",}}>
          
          <button
              onClick={goBack}
              className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
              >
              <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
              {t("goBack")}
            </button>
          
    <h1 className="text-[#350712] dark:text-text-accent text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-4 font-bold leading-snug lg:mb-12">
      PAGE NOT FOUND
    </h1>
    
    </div>
  );
};

export default PageNotFound;