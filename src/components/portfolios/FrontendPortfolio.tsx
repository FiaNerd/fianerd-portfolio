/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslation } from 'react-i18next';
import PortfolioCard from './PortfolioCard';

const FrontendPortfolio = () => {
  const { t } = useTranslation('portfolio/frontendPortfolioSection');

  // Retrieve frontend items dynamically
  const frontendItems = t('portfolio/frontendPortfolioSection:frontendItems', {
    returnObjects: true,
  });

  return (
    <section className="max-w-screen-xl mx-auto px-4">
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
    </section>
  );
};

export default FrontendPortfolio;
