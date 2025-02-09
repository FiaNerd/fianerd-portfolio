import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import portfolioData from "../../../public/assets/locales/en/portfolio.json";
import HeroDetails from "../../components/portfolios/HeroDetails";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioDetailsPage = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]); // Use an array to hold multiple items
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation(["portfolio"]);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  useSmoothScroll(headerHeight ? 0 : headerHeight);

  useEffect(() => {
    const sections = [
      ...portfolioData.top5PortfolioSection.top5Items,
      ...portfolioData.frontendPortfolioSection.frontendItems,
      ...portfolioData.backendPortfolioSection.backendItems,
      ...portfolioData.fullstackPortfolioSection.fullstackItems,
    ];
  
    const filteredItems = sections.filter(
      (item) => item.urlTitle === decodeURIComponent(urlTitle || "")
    );
  
    const uniqueItems = Array.from(new Map(filteredItems.map(item => [item.urlTitle, item])).values());
  
    setPortfolioItems(uniqueItems);
  }, [urlTitle]);
  

  if (portfolioItems.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}
    >
      {portfolioItems.map((item) => (
        <HeroDetails
          key={item.urlTitle}
          title={item.title}
          image={item.image}
          titleDescription={item.titleDescription }
        />
      ))}
    </div>
  );
};

export default PortfolioDetailsPage;
