import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import Button from '../partials/Button.js';
import { useTranslation } from 'react-i18next';

const PortfolioHeroIntro = () => {
  const { t, i18n } = useTranslation(['portfolio/portfolio']);

  const onButtonClick = async () => {
    const resumePath =
      i18n.language === 'sv'
        ? '/files/Sofia-Travnicek-Mattiasson-CV-PersonligtBrev-SV.pdf'
        : '/files/Sofia-Travnicek-Mattiasson-Resume-Coverletter-EN.pdf';

    const fileName =
      i18n.language === 'sv'
        ? 'Sofia-Travnicek-Mattiasson-CV-PersonligtBrev-SV.pdf'
        : 'Sofia-Travnicek-Mattiasson-Resume-Coverletter-EN.pdf';

    try {
      const response = await fetch(resumePath);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="max-w-screen-5xl mx-auto px-4 md:px-12 py-8 grid grid-row-1 lg:grid-cols-[50%_40%] 2xl:grid-cols-[60%_30%] gap-8 lg:gap-20 items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
        <div className="flex flex-col lg:gap-8 md:border-double md:border-4 py-8 px-0 md:px-8 border-[#f3d758] dark:border-[#d85f2d] rounded">
          <h1 className="text-[#f3d758] dark:text-[#d85f2d] text-md md:text-[3rem] xl:text-[5rem] xl:leading-[4.2rem] font-semibold tracking-wpide">
            {t('mainSectionTitle').toUpperCase()}
          </h1>
          <p className="font-semibold tracking-wide mb-12 md:mb-4">
            {t('portfolioIntro')}
          </p>
          <div className="flex flex-col w-80 lg:w-full xl:flex-row items-center mx-auto md:mt-8 gap-4 lg:gap-8 xl:gap-8 2xl:gap-20">
            <Button
              variant="contained"
              onClick={onButtonClick}
              bgColor="bg-btn-bg"
              className="flex flex-row gap-2 justify-center items-center bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide"
            >
              <Icon icon="line-md:cloud-alt-download" width="30" height="30" />{' '}
              {t('ctaButtonCV')}
            </Button>
            <NavLink
              to={'/contact'}
              className="flex flex-row w-full py-4 px-2 text-bg-primary font-bold font-sub-heading rounded-lg hover:shadow-lg justify-center items-center gap-4 md:gap-2 lg:gap-2 xl:gap-2 bg-[#350712] border-3 border-[#350712]  dark:text-text-primary tracking-wide hover:bg-bg-hover hover:bg-[#5a1a2b] dark:hover:bg-[#350712]  hover:border-bg-hover hover:text-bg-primary  text-base md:text-md lg:text-lg cursor-pointer"
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

export default PortfolioHeroIntro;
