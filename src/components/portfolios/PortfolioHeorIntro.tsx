import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import Button from '../partials/Button';
import { useTranslation } from 'react-i18next';

const PortfolioHeorIntro = () => {
  const { t, i18n } = useTranslation(['portfolio/portfolio']);

  const onButtonClick = () => {
    const resumePath =
      i18n.language === 'sv'
        ? '/files/Sofia-Mattiasson-CV-PB-sv.pdf'
        : '/files/Sofia-Mattiasson-Resume-Coverletter-en.pdf';

    const link = document.createElement('a');

    link.href = resumePath;

    link.download =
      i18n.language === 'sv'
        ? 'Sofia-Mattiasson-CV-PB-sv.pdf'
        : 'Sofia-Mattiasson-Resume-Coverletter-en.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <div className="max-w-screen-5xl mx-auto px-4 md:px-12 py-8 grid grid-row-1 lg:grid-cols-[50%_40%] 2xl:grid-cols-[40%_30%] gap-8 lg:gap-20 items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
        <div className="flex flex-col lg:gap-8 md:border-double md:border-4 py-8 px-0 md:px-8 border-[#f3d758] dark:border-[#d85f2d] rounded">
          <h1 className="text-[#f3d758] dark:text-[#d85f2d] text-md md:text-[3rem] xl:text-[5rem] xl:leading-[4.2rem] font-semibold tracking-wpide">
            {t('mainSectionTitle').toUpperCase()}
          </h1>
          <p className="font-semibold tracking-wide">{t('portfolioIntro')}</p>
          <div className="flex flex-col w-full xl:flex-row items-center mx-auto md:mt-8 gap-2">
            <Button
              onClick={onButtonClick}
              className="flex flex-row justify-center items-center gap-4 bg-btn-bg text-bg-primary border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide"
            >
              <Icon icon="line-md:cloud-alt-download" width="30" height="30" />{' '}
              {t('ctaButtonCV')}
            </Button>
            <NavLink
              to={'/contact'}
              className="flex flex-row w-full justify-center items-center gap-4 font-sub-heading bg-[#350712] border-3 border-[#350712] text-bg-primary dark:text-text-primary tracking-wide font-semibold hover:bg-bg-hover dark:hover:bg-[#350712ab] hover:border-bg-hover dark:hover:border-[#350712ab] hover:text-bg-primary  rounded text-base md:text-md lg:text-lg hover:shadow-lg px-4 py-4 cursor-pointer"
            >
              <Icon icon="line-md:email-twotone" width="30" height="30" />{' '}
              {t('ctaButtonContactMe')}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/assets/images/portfolio/me-img.webp"
          alt="portfolio"
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
      </div>
    </div>
  );
};

export default PortfolioHeorIntro;
