import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';

const mergedPortfolioData = mergeTranslations(
  portfolioData,
  top5PortfolioSection,
  frontendPortfolioSection,
  backendPortfolioSection,
  fullstackPortfolioSection,
  graphicPortfolioSection
);

const WebPortfolioDetailsPage = () => {
  const { t, ready } = useTranslation('common');
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const navigate = useNavigate();
  const { headerHeight } = useHeaderHeight();
  const location = useLocation();

  if (!ready) {
    return <div>Loading translations...</div>;
  }

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
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

  const navigateToDetails = (urlTitle: string, projectType: string) => {
    navigate(`/portfolio/${encodeURIComponent(urlTitle)}`, {
      state: { fromSection: projectType.toLowerCase() }, // Pass the section name dynamically
    });
  };

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
      className="bg-blend-multiply mb-8"
    >
      <div className="mb-8">
        {portfolioItems.map((item) => (
          <HeroDetails
            key={item.urlTitle}
            title={item.title}
            subTitle={item.subTitle || ''}
            image={item.image}
            titleDescription={item.titleDescription}
            light="text-[#4b8668]"
            dark="dark:text-[#86834b]"
          />
        ))}
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start lg:flex-row">
        <button
          onClick={() => navigate('/portfolio', { replace: true })}
          className="inline-flex items-start font-sub-heading gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
        >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          {t('common:goBack').toUpperCase()}
        </button>
      </div>

      {portfolioItems &&
        portfolioItems.map((item) => (
          <div
            id="portfolio-details"
            key={item.urlTitle}
            className="py-12 max-w-screen-2xl mx-auto px-4"
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
              links={item.links}
            />
          </div>
        ))}
    </div>
  );
};

export default WebPortfolioDetailsPage;
