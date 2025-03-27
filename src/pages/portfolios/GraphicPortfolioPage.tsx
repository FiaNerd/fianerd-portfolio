import { useTranslation } from 'react-i18next';
import GraphicImageGallery from '../../components/portfolios/graphic/GraphicImageGallery';

const GraphicPortfolioPage = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <p className="text-center">
        {t('portfolio/graphicPortfolioSection:top10graphicProjects')}
      </p>
      <GraphicImageGallery />
    </div>
  );
};

export default GraphicPortfolioPage;
