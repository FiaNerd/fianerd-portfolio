import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import portfolioData from "../../../public/assets/locales/sv/portfolio.json"; // Adjust the path as necessary
import HeroDetails from "../../components/portfolios/HeroDetails";

const PortfolioDetailsPage = () => {
  const { title } = useParams<{ title: string }>();
  const [portfolioItem, setPortfolioItem] = useState<any>(null);

  useEffect(() => {
    const item = portfolioData.top5PortfolioSection.itemsTop5.find(
      (item: any) => item.title === decodeURIComponent(title || "")
    );
    setPortfolioItem(item);
  }, [title]);

  if (!portfolioItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="portfolio-details-page" >
      <HeroDetails
        title={portfolioItem.title}
        image={portfolioItem.image}
        titleDescription={portfolioItem.description}
      />
      {/* Add your details page content here */}
    </div>
  );
};

export default PortfolioDetailsPage;