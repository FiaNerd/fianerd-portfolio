import { Icon } from '@iconify/react';
import { useState, useEffect, startTransition } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroDetails from '../../components/partials/HeroDetails';
import PortfolioDetailsItems from '../../components/portfolios/PortfolioDetailsItems';
import useHeaderHeight from '../../hook/useHeaderHeight';
import portfolioData from '../../../public/locales/en/portfolio/portfolio.json';
import top5PortfolioSection from '../../../public/locales/en/portfolio/top5PortfolioSection.json';
import frontendPortfolioSection from '../../../public/locales/en/portfolio/frontendPortfolioSection.json';
import backendPortfolioSection from '../../../public/locales/en/portfolio/backendPortfolioSection.json';
import fullstackPortfolioSection from '../../../public/locales/en/portfolio/fullstackPortfolioSection.json';
import graphicPortfolioSection from '../../../public/locales/en/portfolio/graphicPortfolioSection.json';
import { mergeTranslations } from '../../utils/mergeTranslation';

const mergedPortfolioData = mergeTranslations(
  portfolioData,
  top5PortfolioSection,
  frontendPortfolioSection,
  backendPortfolioSection,
  fullstackPortfolioSection,
  graphicPortfolioSection
);

const WebPortfolioDetailsPage = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const navigate = useNavigate();
  const headerHeight  = useHeaderHeight();

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        console.log('Merged Portfolio Data:', mergedPortfolioData);

        const sections = [
          ...(mergedPortfolioData.top5Items || []),
          ...(mergedPortfolioData.frontendItems || []),
          ...(mergedPortfolioData.backendItems || []),
          ...(mergedPortfolioData.fullstackItems || []),
          ...(mergedPortfolioData.graphicItemsPortfolio || []),
        ];

        if (sections.length === 0) {
          console.error('No sections found in portfolio data.');
          return;
        }

        const filteredItems = sections.filter(
          (item) => item.urlTitle === decodeURIComponent(urlTitle || '')
        );

        const uniqueItems = Array.from(
          new Map(filteredItems.map((item) => [item.urlTitle, item])).values()
        );

        setPortfolioItems(uniqueItems);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      }
    };

    loadPortfolioData();
  }, [urlTitle]);

  const handleNavigationback = () => {
    startTransition(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <div
        className="mb-8"
        style={{
          marginTop: `${headerHeight}px`,
          transition: 'top 0.3s ease',
        }}
      >
        {portfolioItems.map((item) => (
          <HeroDetails
            key={item.urlTitle}
            title={item.title}
            image={item.image}
            subTitle={item.titleDescription}
            light="text-[#4b8668]"
            dark="dark:text-[#86834b]"
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-start lg:flex-row">
        <button
          onClick={handleNavigationback}
          className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
        >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          Go Back
        </button>
      </div>

      {portfolioItems &&
        portfolioItems.map((item) => (
          <div
            id="portfolio-details"
            key={item.urlTitle}
            className="py-12 max-w-screen-xl mx-auto px-4"
          >
            <PortfolioDetailsItems
              title={item.title}
              titleDescription={item.titleDescription}
              images={item.images}
              description={item.description}
              techTitle={item.techTitle}
              tech={item.tech}
              applicationTypeDetail={item.applicationTypeDetail}
              linkTitle={item.linkTitle}
              links={item.ctaLink}
            />
          </div>
        ))}
    </>
  );
};

export default WebPortfolioDetailsPage;
