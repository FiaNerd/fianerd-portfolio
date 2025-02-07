/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslation } from "react-i18next";
import i18n from "../../../public/assets/i18n/i18n";
import PortfolioCard from "../partials/PortfolioCard";

const FrontendPortfolio = () => {
  const { t } = useTranslation("portfolio");
  
   // Log the current language and namespaces
   console.log("Current language:", i18n.language);
   console.log("Loaded namespaces:", i18n.options.ns);
 

  // Retrieve frontend items dynamically
  const frontendItems = t("frontendPortfolioSection.frontendItems", { returnObjects: true });

  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <p
        className="mb-12"
        dangerouslySetInnerHTML={{ __html: t("frontendPortfolioSection.introFrontendPortfolio") }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mx-auto">
        {Array.isArray(frontendItems) && frontendItems.map((item: any, index: number) => (
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
              titleDescription={item.titleDescription}
            />
        ))}
      </div>
    </section>
  );
};

export default FrontendPortfolio;
