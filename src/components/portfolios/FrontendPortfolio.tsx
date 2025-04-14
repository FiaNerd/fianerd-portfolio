/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';

const FrontendPortfolio = () => {
  const { t } = useTranslation('portfolio/frontendPortfolioSection');

  // Retrieve frontend items dynamically
  const frontendItems = t('portfolio/frontendPortfolioSection:frontendItems', {
    returnObjects: true,
  });

  const fadeInDown = useFadeIn({ direction: 'down', delay: 0.5, duration: 1 });

  return (
    <motion.section
      ref={fadeInDown.ref}
      initial="hidden"
      animate={fadeInDown.ctrls}
      variants={fadeInDown.vars}
      className="max-w-screen-2xl mx-auto px-4"
    >
      <p
        className="mb-12"
        dangerouslySetInnerHTML={{
          __html: t(
            'portfolio/frontendPortfolioSection:introFrontendPortfolio'
          ),
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
        {Array.isArray(frontendItems) &&
          frontendItems.map((item: any, index: number) => (
            <PortfolioCard
              key={index}
              title={item.title}
              urlTitle={item.urlTitle}
              description={item.description}
              img={item.image}
              links={item.ctaLink}
              tech={item.tech}
              applicationType={item.applicationType}
              subTitle={item.subTitle}
              projectType={item.projectType}
              linkTitle={item.linkTitle}
              ctaButton={item.ctaButton}
              techTitle={item.techTitle}
              projectDuration={item.projectDuration}
              titleDescription={item.titleDescription}
            />
          ))}
      </div>
    </motion.section>
  );
};

export default FrontendPortfolio;
