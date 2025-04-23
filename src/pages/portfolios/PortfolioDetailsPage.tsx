import { Icon } from '@iconify/react';
import { startTransition, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import portfolioDataEn from '../../../public/locales/en/portfolioSection.json';
import portfolioDataSv from '../../../public/locales/sv/portfolioSection.json';
import PortfolioDetailsItems from '../../components/portfolios/PortfolioDetailsItems';
import HeroDetails from '../../components/partials/HeroDetails';
import LoadingSpinner from '../../components/partials/LoadingSpinner';
import Button from '../../components/partials/Button';

const PortfolioDetailsPage = ({ headerHeight }: { headerHeight: number }) => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const { i18n } = useTranslation();
  const { t } = useTranslation(['portfolio', 'common']);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const portfolioData =
      i18n.language === 'sv' ? portfolioDataSv : portfolioDataEn;

    const sections = [
      ...(portfolioData.top5PortfolioSection?.top5Items || []),
      ...(portfolioData.frontendPortfolioSection?.frontendItems || []),
      ...(portfolioData.backendPortfolioSection?.backendItems || []),
      ...(portfolioData.fullstackPortfolioSection?.fullstackItems || []),
      ...(portfolioData.graphicPortfolioSection || []),
    ];

    const filteredItems = sections.filter(
      (item) => item.urlTitle === decodeURIComponent(urlTitle || '')
    );

    const uniqueItems = Array.from(
      new Map(filteredItems.map((item) => [item.urlTitle, item])).values()
    );

    setPortfolioItems(uniqueItems);
  }, [urlTitle, i18n.language]);

  useEffect(() => {
    if (location.state?.sectionId) {
      sessionStorage.setItem('lastPortfolioSection', location.state.sectionId);
    }
  }, [location.state]);

  const handleBack = () => {
    const sectionId =
      location.state?.sectionId ||
      sessionStorage.getItem('lastPortfolioSection');

    startTransition(() => {
      if (sectionId) {
        navigate(`/portfolio#${sectionId}`);
      } else {
        navigate('/portfolio');
      }
    });
  };

  if (portfolioItems.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-blend-multiply mb-8">
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
        <Button
          variant="text"
          onClick={handleBack}
          className="inline-flex items-start gap-2 transition-all duration-200 hover:scale-105 w-auto"
        >
          <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
          {t('common:goBack').toUpperCase()}
        </Button>
      </div>

      {portfolioItems.map((item) => (
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

export default PortfolioDetailsPage;
