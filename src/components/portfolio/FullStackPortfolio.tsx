/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import PortfolioCard from '../partials/PortfolioCard';

const FullStackPortfolio = () => {
    const { t } = useTranslation("portfolio");
  

    // Retrieve frontend items dynamically
    const fullstackItems = t("fullstackPortfolioSection.fullstackItems", { returnObjects: true });
  
    return (
      <section className="max-w-screen-xl mx-auto px-4">
        <p
          className="mb-12"
          dangerouslySetInnerHTML={{ __html: t("fullstackPortfolioSection.introFullstackPortfolio") }}
        />
  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
          {Array.isArray(fullstackItems) && fullstackItems.map((item: any, index: number) => (
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
  )
}

export default FullStackPortfolio