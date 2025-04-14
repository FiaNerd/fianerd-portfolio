import { Icon } from '@iconify/react';
import { startTransition, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import HeroDetails from '../../components/partials/HeroDetails';
import PortfolioDetailsItems from '../../components/portfolios/PortfolioDetailsItems';
import useHeaderHeight from '../../hook/useHeaderHeight';
import Button from '../../components/partials/Button';

const PortfolioDetailsPage = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  // const [headerHeight, setHeaderHeight] = useState(0);
  const { i18n, t } = useTranslation([
    'portfolio/portfolio',
    'portfolio/top5PortfolioSection',
    'portfolio/frontendPortfolioSection',
    'portfolio/backendPortfolioSection',
    'portfolio/fullstackPortfolioSection',
    'portfolio/graphicPortfolioSection',
    'common',
  ]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const { headerHeight } = useHeaderHeight();

  useEffect(() => {
    const loadPortfolioData = async () => {
      const portfolioData = await Promise.all([
        i18n.getResourceBundle(i18n.language, 'portfolio/portfolio'),
        i18n.getResourceBundle(i18n.language, 'portfolio/top5PortfolioSection'),
        i18n.getResourceBundle(
          i18n.language,
          'portfolio/frontendPortfolioSection'
        ),
        i18n.getResourceBundle(
          i18n.language,
          'portfolio/backendPortfolioSection'
        ),
        i18n.getResourceBundle(
          i18n.language,
          'portfolio/fullstackPortfolioSection'
        ),
        i18n.getResourceBundle(
          i18n.language,
          'portfolio/graphicPortfolioSection'
        ),
      ]);

      const sections = [
        ...(portfolioData[1]?.top5Items || []),
        ...(portfolioData[2]?.frontendItems || []),
        ...(portfolioData[3]?.backendItems || []),
        ...(portfolioData[4]?.fullstackItems || []),
        ...(portfolioData[5]?.graphicItemsPortfolio || []),
      ];

      const filteredItems = sections.filter(
        (item) => item.urlTitle === decodeURIComponent(urlTitle || '')
      );

      const uniqueItems = Array.from(
        new Map(filteredItems.map((item) => [item.urlTitle, item])).values()
      );

      setPortfolioItems(uniqueItems);
    };

    loadPortfolioData();
  }, [urlTitle, i18n.language]);

  if (portfolioItems.length === 0) {
    return <div>Loading...</div>;
  }

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
        <Button
          onClick={handleNavigate}
          className="inline-flex items-start gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1 "
        >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          {t('common:goBack').toUpperCase()}
        </Button>
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

export default PortfolioDetailsPage;
