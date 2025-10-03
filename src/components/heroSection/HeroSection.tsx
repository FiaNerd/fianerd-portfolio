import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18n from '../../../public/i18n/i18n.js';
import Button from '../partials/Button.js';
import ResponsiveHeroImage from './ResponsiveHeroImage.js';
import { startTransition } from 'react';

const HeroSection = () => {
  const { t } = useTranslation('heroSection');
  const navigate = useNavigate();

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

  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    startTransition(() => {
      navigate('/portfolio/my-work');
    });
  };

  return (
    <div className="relative w-full h-full flex justify-center">
      <div className="absolute grid grid-cols-1 md:grid-cols-[80%] lg:grid-cols-[65%] 2xl:grid-cols-[50%] w-full h-full z-10">
        <div className="flex flex-col justify-center items-start px-6 md:px-12 text-left md:text-left z-10 w-full h-full">
          <div className={'bg-white/30 dark:bg-black/40 p-6 rounded'}>
            <h1
              className="text-[#350712] dark:text-text-accent text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-4 font-bold leading-snug lg:mb-12"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
            <h2 className="text-[#5c1e64] dark:text-accent-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-0">
              {t('subTitle')}
            </h2>
            <h3 className="text-[#350712]/80 dark:text-text-accent text-lg sm:text-xl md:text-xl mb-4">
              {t('textIntro')}
            </h3>
            <p className="text-[#350712] dark:text-text-primary text-sm sm:text-base md:text-md mb-4 lg:mb-8">
              {t('text')}
            </p>
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <Button
                variant="contained"
                onClick={onButtonClick}
                bgColor="bg-btn-bg"
                className="flex flex-row gap-2 justify-center items-center bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide"
              >
                <Icon
                  icon="line-md:cloud-alt-download"
                  width="30"
                  height="30"
                />{' '}
                {t('ctaButtonCV')}
              </Button>

              <Button
                variant="contained"
                onClick={handleNavigate}
                bgColor="bg-[#350712] dark:bg-[#5a1a2b]"
                className="flex flex-row w-full py-2 md:py-3 px-4 justify-center items-center gap-4 font-sub-heading text-bg-primary dark:text-text-primary tracking-wide font-semibold rounded-lg text-base md:text-md lg:text-lg hover:shadow-lg cursor-pointer hover:bg-[#5a1a2b] dark:hover:bg-[#350712]"
              >
                <Icon icon="line-md:email-twotone" width="30" height="30" />{' '}
                {t('ctaButtonPortfolio')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveHeroImage />
    </div>
  );
};

export default HeroSection;
