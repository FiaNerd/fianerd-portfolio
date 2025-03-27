import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';
import { Icon } from '@iconify/react';
import SidebarGraphicPortfolio from '../../components/portfolios/graphic/SidebarGraphicPortfolio';
import HeroDetails from '../../components/partials/HeroDetails';

const GraphicPortfolioDetails = () => {
  const { urlTitle } = useParams<{ urlTitle: string }>();
  const { t } = useTranslation('portfolio/graphicPortfolioSection');
  const headerHeight = useHeaderHeight();

  // const graphicImages = t(
  //   'portfolio/graphicPortfolioSection:graphicContentPortfolio',
  //   {
  //     returnObjects: true,
  //   }
  // ) as {
  //   urlTitle: string;
  //   title: string;
  //   subTitle: string;
  //   description: string;
  //   image: string;
  //   alt: string;
  //   ctaButton: string;
  // }[];

  // const imageDetails = graphicImages.find(
  //   (image) => image.urlTitle === urlTitle
  // );
  // const navigate = useNavigate();
  // if (!imageDetails) {
  //   return <div>Image not found</div>;
  // }

  useSmoothScroll(headerHeight);

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
      className="bg-blend-multiply"
    >
      {/* <HeroDetails
        title={imageDetails.title}
        image={imageDetails.image || ''}
        titleDescription={imageDetails.subTitle}
        light="text-bg-secondary"
        dark="dark:text-text-accent"
      /> */}

      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-start lg:flex-row mb-8">
          <button
            // onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover:text-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1"
          >
            <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
            {t('partialTranslation:goBack')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicPortfolioDetails;
