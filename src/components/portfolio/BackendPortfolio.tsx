/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import PortfolioCard from '../partials/PortfolioCard';

const BackendPortfolio = () => {
  const { t } = useTranslation("portfolio");

  console.log("portfolio", t("backendPortfolioSection.backendItems", { returnObjects: true }));

  const backendItems = t('backendPortfolioSection.backendItems', { returnObjects: true });

  console.log('Backend Items:', backendItems)

  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <p className='mb-12' dangerouslySetInnerHTML={{ __html: t('backendPortfolioSection.introBackendPortfolio') }} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
        {Array.isArray(backendItems) && backendItems.map((item: any, index: number) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.image}
            links={item.links}
            tech={item.tech}
            applicationType={item.applicationType}
            subTitle={item.subTitle}
            projectType={item.projectType}
            linkTitle={item.linkTitle}
            ctaButton={item.ctaButton}
            techTitle={item.techTitle}
            projectDuration={item.projectDuration}
          />
        ))}
      </div>
    </section>
  );
};

export default BackendPortfolio;