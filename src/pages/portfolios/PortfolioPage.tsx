import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import RippedPaperBottom from '../../assets/svg/RippedPaperBottom';
import RippedPaperTop from '../../assets/svg/RippedPaperTop';
import SvgWaves from '../../assets/svg/SvgWaves';
import SectionPlate from '../../components/partials/SectionPlate';
import Title from '../../components/partials/Title';
import BackendPortfolio from '../../components/portfolios/BackendPortfolio';
import FrontendPortfolio from '../../components/portfolios/FrontendPortfolio';
import FullStackPortfolio from '../../components/portfolios/FullStackPortfolio';
import Top5projects from '../../components/portfolios/Top5projects';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useScrollUpdateURL from '../../hook/useScrollUpdateURL';
import GraphicPortfolioPage from './GraphicPortfolioPage';
import { startTransition, useEffect, useRef, useState } from 'react';
import { handleHashNavigation } from '../../utils/handleHashNavigation';
import PortfolioHeroIntro from '../../components/portfolios/PortfolioHeroIntro';

const PortfolioPage = ({ headerHeight }: { headerHeight: number }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const { t } = useTranslation([
    'portfolio/portfolio',
    'portfolio/top5PortfolioSection',
    'portfolio/frontendPortfolioSection',
    'portfolio/backendPortfolioSection',
    'portfolio/fullstackPortfolioSection',
    'portfolio/graphicPortfolioSection',
  ]);

  const sectionIds = [
    'my-work',
    'top-5-projects',
    'frontend',
    'backend',
    'fullstack',
    'graphic-design',
  ];

  const isNavigatingRef = useRef(isNavigating);

  useEffect(() => {
    isNavigatingRef.current = isNavigating; // Keep ref in sync with state
  }, [isNavigating]);

  useEffect(() => {
    startTransition(() => {});
    handleHashNavigation({
      sectionIds,
      headerHeight,
      isHeaderVisible: true,
      isNavigating: isNavigatingRef,
      onNavigationComplete: () => {
        setIsNavigating(false); // Update state
      },
    });
  }, [headerHeight]);

  useScrollUpdateURL(sectionIds, 'portfolio', headerHeight);

  return (
    <div className="bg-blend-multiply">
      <section id="my-work" className="bg-[#436e74] dark:bg-[#16443e]">
        <Title
          title={t('titlePortfolio')}
          dot={'.'}
          children={t('subTitlePortfolio')}
          className="bg-[#436e74] dark:bg-[#16443e] text-[#f39058] dark:text-[#d85f2d] mb-6 md:mb-8 lg:mb-10 leading-[0]"
          sticky
        />
        <PortfolioHeroIntro />
      </section>

      <SvgWaves colorLight={'#436e74'} colorDark={'#16443e'} />

      <section id="top-5-projects" className="top-0">
        <Title
          dangerouslyHTML={t(
            'portfolio/top5PortfolioSection:titleTop5Portfolio'
          )}
          dot={'.'}
          children={t('portfolio/top5PortfolioSection:subTitleTop5Portfolio')}
          className="bg-[#f5e3c8] dark:bg-[#1b0909] text-[#2ea25f] dark:text-[#cb384c] px-4 mb-6 md::mb-8 leading-[0]"
          sticky
        />
        <Top5projects sectionId={'top-5-projects'} />
      </section>

      <section id="frontend" className="top-0">
        <RippedPaperTop
          id="frontend"
          colorLight={'#f69497'}
          colorDark={'#4a2342'}
        />
        <SectionPlate className="bg-[#f69497] dark:bg-[#4a2342]">
          <Title
            title={t(
              'portfolio/frontendPortfolioSection:titleFrontendPortfolio'
            )}
            dot={'.'}
            children={t(
              'portfolio/frontendPortfolioSection:subTitleFrontendPortfolio'
            )}
            className="px-4 mt-0 mb-6 md:mb-8 leading-[0]"
            light="text-[#ca0416] bg-[#f69497]"
            dark="dark:text-[#d6a70d] dark:bg-[#4a2342]"
            sticky
          />
          <FrontendPortfolio sectionId="frontend" />
        </SectionPlate>
        <RippedPaperBottom colorLight={'#f69497'} colorDark={'#4a2342'} />
      </section>

      <section id="backend" className="top-0 mb-12">
        <Title
          title={t('portfolio/backendPortfolioSection:titlePortfolioBackend')}
          dot={'.'}
          children={t(
            'portfolio/backendPortfolioSection:subTitlePortfolioBackend'
          )}
          className=" px-4 mt-0 mb-6 md:mb-8 leading-[0]"
          light="text-[#ec4428] bg-[#fff5d7]"
          dark="dark:text-[#1d7ecc] dark:bg-[#1b0909]"
          sticky
        />
        <BackendPortfolio sectionId="backend" />
      </section>

      <section id="fullstack">
        <RippedPaperTop colorLight={'#9fc4bd'} colorDark={'#dc8e32'} />
        <SectionPlate className="bg-[#9fc4bd] dark:bg-[#dc8e32]">
          <Title
            title={t(
              'portfolio/fullstackPortfolioSection:titlePortfolioFullstack'
            )}
            dot={'.'}
            children={t(
              'portfolio/fullstackPortfolioSection:subTitlePortfolioFullstack'
            )}
            className=" text-[#064352] dark:text-[#831518] px-4 mt-0 mb-6 md:mb-8"
            subHeadingClassName="text-text-secondary dark:text-[#1b0909]"
            light="text-[#064352] bg-[#9fc4bd]"
            dark="dark:text-[#831518] dark:bg-[#dc8e32]"
            sticky
          />
          <FullStackPortfolio sectionId="fullstack" />
        </SectionPlate>
        <RippedPaperBottom colorLight={'#9fc4bd'} colorDark={'#dc8e32'} />
      </section>

      <section id="graphic-design" className="relative">
        <Title
          title={t('portfolio/graphicPortfolioSection:titleGraphicPortfolio')}
          dot={'.'}
          children={t(
            'portfolio/graphicPortfolioSection:subTitleGraphicPortfolio'
          )}
          className="px-4 mt-0 mb-6 md:mb-8 leading-[0]"
          subHeadingClassName="text-text-secondary"
          light="text-[#8d4970] bg-[#fff5d7]"
          dark="dark:text-[#55ae63] dark:bg-[#1b0909]"
          sticky
        />
        <GraphicPortfolioPage />
      </section>
    </div>
  );
};

export default PortfolioPage;
