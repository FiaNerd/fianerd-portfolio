import { useTranslation } from 'react-i18next';
import GraphicImageGallery from '../../components/portfolios/graphic/GraphicImageGallery';

const GraphicPortfolioPage = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-20">
      <p
        className="text-center"
        dangerouslySetInnerHTML={{
          __html: t('portfolio/graphicPortfolioSection:top10graphicProjects'),
        }}
      />

      <GraphicImageGallery />
    </div>
  );
};

export default GraphicPortfolioPage;
