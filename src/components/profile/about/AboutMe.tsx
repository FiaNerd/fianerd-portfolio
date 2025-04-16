import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFadeIn from '../../../hook/useFadeIn';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../../partials/Button';

const AboutMe = () => {
  const { t } = useTranslation(['profile/aboutMe', 'translation']);
  const [isExpanded, setIsExpanded] = useState(false);

  // Animations for the image and text
  const fadeInImage = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInText = useFadeIn({ direction: 'right', delay: 0.7, duration: 1 });

  const handleToggleText = () => {
    if (isExpanded) {
      const articleTop = document.getElementById('me');
      if (articleTop) {
        articleTop.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 py-8 md:py-20">
      {/* Left Column: Image */}
      <motion.div
        ref={fadeInImage.ref}
        initial="hidden"
        animate={fadeInImage.ctrls}
        variants={fadeInImage.vars}
        className="flex justify-center items-start"
      >
        <motion.img
          src="/assets/images/profile-img-mobile.jpg"
          alt="Fia nerd"
          className="rounded-lg shadow-lg max-w-full h-auto object-cover"
        />
      </motion.div>

      {/* Right Column: Text */}
      <motion.div
        ref={fadeInText.ref}
        initial="hidden"
        animate={fadeInText.ctrls}
        variants={fadeInText.vars}
        id="me"
        className="flex flex-col justify-center"
      >
        <h2 className="text-h2 font-bold text-[#ca5b87] dark:text-accent-primary">
          {t('profile/aboutMe:titleProfile')}
        </h2>
        <p className="italic">{t('intro')}</p>
        <p className="font-semibold tracking-wide">{t('introBio')}</p>
        <p
          className={`${
            isExpanded ? 'line-clamp-none' : 'line-clamp-5 lg:line-clamp-[10]'
          }`}
          dangerouslySetInnerHTML={{ __html: t('mainIntroProfile') }}
        />
        {isExpanded && (
          <>
            <h3 className="text-[#ca5b87] dark:text-accent-primary font-bold">
              {t('myBackgroundTitle')}
            </h3>
            <p>{t('myBackgroundText')}</p>
            <h3 className="text-[#ca5b87] dark:text-accent-primary font-bold">
              {t('myJourneyTitle')}
            </h3>
            <p>{t('myJourneyText')}</p>
            <h4 className="text-[#ca5b87] dark:text-accent-primary font-bold">
              {t('myFilosofiTitle')}
            </h4>
            <p>{t('myFilosofiText1')}</p>
            <p>{t('myFilosofiText2')}</p>
            <p>{t('myFilosofiText3')}</p>
            <p>{t('myFilosofiText4')}</p>
            <h3 className="text-4xl md:text-6xl font-bold text-[#ca5b87] dark:text-accent-primary mt-8 mb-8">
              {t('createTogheterTitle')}
            </h3>
            <p>{t('createTogheterText')}</p>
            <NavLink
              to={'/contact'}
              className="flex w-full items-center justify-center gap-4 font-medium border-2 border-btn-bg text-btn-bg hover:bg-bg-hover hover:border-bg-hover hover:text-bg-primary rounded px-4 py-2"
            >
              <Icon icon="line-md:email-twotone" width="30" height="30" />
              {t('translation:contact')}
            </NavLink>
          </>
        )}
        <Button
          className="flex mt-4 text-lg items-end justify-end font-bold text-nav-text hover:text-nav-hover bg-transparent hover:underline-offset-4 hover:underline"
          onClick={handleToggleText}
        >
          {isExpanded ? t('ctaLess') : t('cta')}
        </Button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
