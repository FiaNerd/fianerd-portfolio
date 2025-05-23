import { useTranslation } from 'react-i18next';
import ContactForm from '../../components/contact/ContactForm';
import Title from '../../components/partials/Title';
import useScrollUpdateURL from '../../hook/useScrollUpdateURL';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';

const ContactPage = ({ headerHeight }: { headerHeight: number }) => {
  const { t } = useTranslation('contact/contact');

  useScrollUpdateURL(['contact'], '', headerHeight);

  const fadeInDown = useFadeIn({ direction: 'down', delay: 0.5, duration: 1 });

  return (
    <div className="bg-blend-multiply min-h-screen h-full lg:bg-[url('/assets/images/portfolio/fullstack/school/coffeshop/coffe-hero.jpg')] bg-cover bg-center w-full">
      <Title
        id="contact"
        title={t('contactTitle')}
        dot={'?'}
        children={t('contactSubtitle')}
        className="text-[#d47166] top-0 dark:text-accent-primary"
        subHeadingClassName="text-text-secondary dark:text-text-secondary"
        light="bg-[#e7a48a]"
        dark="dark:bg-[#1d1617]"
        sticky
      />

      <motion.div
        ref={fadeInDown.ref}
        initial="hidden"
        animate={fadeInDown.ctrls}
        variants={fadeInDown.vars}
        className="max-w-screen-xl mx-auto lg:bg-[#d47166] lg:dark:bg-[#1d1617] mb-20 grid grid-row md:grid-cols-[auto_45%] gap-4 justify-center items-center py-4 md:px-4 rounded-lg"
      >
        <div className="flex flex-col items-center md:px-2 text-wrap">
          <h1 className="text-text-primary">
            {t('contactGreeting').toUpperCase()}
          </h1>
          <blockquote className="w-full space-y-8 px-2 mb-8 md:mb-8">
            <h4
              className="border-l-8 pl-[0.2em] border-[#159ea2] dark:border-pink-500 text-center"
              dangerouslySetInnerHTML={{ __html: t('contactIntro') }}
            ></h4>
            <p dangerouslySetInnerHTML={{ __html: t('contactSubIntro') }}></p>
          </blockquote>
          <div className="w-80 mx-auto mb-8 md:mb-0">
            <img
              src="/assets/images/me-img.jpg"
              alt="contact image"
              className="border-4 border-text-primary mx-auto"
            />
          </div>
        </div>

        <div className="bg-[#e7a48a] dark:bg-[#1d1617] flex flex-col py-4 px-4 lg:px-8 rounded-lg">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
