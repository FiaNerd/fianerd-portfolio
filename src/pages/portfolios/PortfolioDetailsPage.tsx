import { Icon } from "@iconify/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import portfolioDataEn from "../../../public/assets/locales/en/portfolio.json";
import portfolioDataSv from "../../../public/assets/locales/sv/portfolio.json";
import HeroDetails from "../../components/portfolios/HeroDetails";
import PortfolioDetailsItems from "../../components/portfolios/PortfolioDetailsItems";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioDetailsPage = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { i18n } = useTranslation();
  const { t } = useTranslation("portfolio");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  useSmoothScroll(headerHeight ? 0 : headerHeight);

  useEffect(() => {
    const portfolioData = i18n.language === "sv" ? portfolioDataSv : portfolioDataEn;

    const sections = [
      ...(portfolioData.top5PortfolioSection?.top5Items || []),
      ...(portfolioData.frontendPortfolioSection?.frontendItems || []),
      ...(portfolioData.backendPortfolioSection?.backendItems || []),
      ...(portfolioData.fullstackPortfolioSection?.fullstackItems || []),
    ];

    const filteredItems = sections.filter(
      (item) => item.urlTitle === decodeURIComponent(urlTitle || "")
    );

    const uniqueItems = Array.from(
      new Map(filteredItems.map((item) => [item.urlTitle, item])).values()
    );

    setPortfolioItems(uniqueItems);
  }, [urlTitle, i18n.language]); 

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
      <div className="mb-12">
        {portfolioItems.map((item) => (
          <HeroDetails
            key={item.urlTitle}
            title={item.title}
            image={item.image}
            titleDescription={item.titleDescription}
          />
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-start lg:flex-row">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover:text-[#71c79c] bg-transparent w-auto px-2 py-1 "
          >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          {t("goBack")}
        </button>
      </div>


      {portfolioItems && portfolioItems.map((item) => (
        <div id="portfolio-details" key={item.urlTitle} className="py-12">
          <PortfolioDetailsItems
            title={item.title}
            titleDescription={item.titleDescription}
            images={item.images}
            description={item.description}
            techTitle={item.techTitle}
            tech={item.tech}
            applicationTypeDetail={item.applicationTypeDetail}
            linkTitle={item.linkTitle}
            links={item.links}
          />
        </div>
      ))}
      
    </div>
  );
};

export default PortfolioDetailsPage;