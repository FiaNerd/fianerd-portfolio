/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';

interface IBackendProps {
  sectionId: string;
}

const BackendPortfolio = ({ sectionId }: IBackendProps) => {
  const { t } = useTranslation('portfolio');

  const backendItems = t('portfolio/backendPortfolioSection:backendItems', {
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
          __html: t('portfolio/backendPortfolioSection:introBackendPortfolio'),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
        {Array.isArray(backendItems) &&
          backendItems.map((item: any, index: number) => (
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
              sectionId={sectionId}
            />
          ))}
      </div>
    </motion.section>
  );
};

export default BackendPortfolio;
