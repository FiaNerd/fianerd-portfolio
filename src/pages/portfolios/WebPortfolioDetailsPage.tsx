const WebPortfolioDetailsPage = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);

  const { i18n, t, ready } = useTranslation([
    'portfolio/portfolio',
    'portfolio/top5PortfolioSection',
    'portfolio/frontendPortfolioSection',
    'portfolio/backendPortfolioSection',
    'portfolio/fullstackPortfolioSection',
    'portfolio/graphicPortfolioSection',
    'common',
  ]);

  const navigate = useNavigate();
  const { headerHeight } = useHeaderHeight();

  useEffect(() => {
    const loadPortfolioData = async () => {
      if (!ready) return;

      try {
        const portfolioData = await Promise.all([
          i18n.getResourceBundle(i18n.language, 'portfolio/portfolio'),
          i18n.getResourceBundle(i18n.language, 'portfolio/top5PortfolioSection'),
          i18n.getResourceBundle(i18n.language, 'portfolio/frontendPortfolioSection'),
          i18n.getResourceBundle(i18n.language, 'portfolio/backendPortfolioSection'),
          i18n.getResourceBundle(i18n.language, 'portfolio/fullstackPortfolioSection'),
          i18n.getResourceBundle(i18n.language, 'portfolio/graphicPortfolioSection'),
        ]);

        console.log('portfolioData:', portfolioData);

        if (!portfolioData || portfolioData.length === 0) {
          console.error('Portfolio data is missing or empty.');
          return;
        }

        const sections = [
          ...(portfolioData[1]?.top5Items || []),
          ...(portfolioData[2]?.frontendItems || []),
          ...(portfolioData[3]?.backendItems || []),
          ...(portfolioData[4]?.fullstackItems || []),
          ...(portfolioData[5]?.graphicItemsPortfolio || []),
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
  }, [urlTitle, i18n.language, ready]);

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (portfolioItems.length === 0) {
    return <div>{t('common:loadingPortfolio', 'Loading portfolio...')}</div>;
  }

  const handleNavigationback = () => {
    navigate(-1);
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
          {t('common:goBack')}
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