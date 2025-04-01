import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RippedPaperBottom from '../../assets/svg/RippedPaperBottom';
import RippedPaperTop from '../../assets/svg/RippedPaperTop';
import SvgWaves from '../../assets/svg/SvgWaves';
import Button from '../../components/partials/Button';
import SectionPlate from '../../components/partials/SectionPlate';
import Title from '../../components/partials/Title';
import BackendPortfolio from '../../components/portfolios/BackendPortfolio';
import FrontendPortfolio from '../../components/portfolios/FrontendPortfolio';
import FullStackPortfolio from '../../components/portfolios/FullStackPortfolio';
import Top5projects from '../../components/portfolios/Top5projects';
import useHeaderHeight from '../../hook/useHeaderHeight';
import { useLocation } from 'react-router-dom';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useScrollUpdateURL from '../../hook/useScrollUpdate';
import { NavLink } from 'react-router-dom';
import i18n from '../../../public/i18n/i18n';
import useScrollSpy from '../../hook/useScrollSpy';
import GraphicPortfolioPage from './GraphicPortfolioPage';

const PortfolioPage = () => {
  const { t } = useTranslation([
    'portfolio/portfolio',
    'portfolio/top5PortfolioSection',
    'portfolio/frontendPortfolioSection',
    'portfolio/backendPortfolioSection',
    'portfolio/fullstackPortfolioSection',
    'portfolio/graphicPortfolioSection',
  ]);

  const headerHeight = useHeaderHeight();

  const location = useLocation();

  useEffect(() => {
    const handleHashNavigation = () => {
      const sectionId = location.pathname.split('/').pop(); // Get the last part of the path
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with ID "${sectionId}" not found.`);
        }
      }
    };
  
    handleHashNavigation();
  }, [location]);

  useScrollUpdateURL('portfolio');

  useSmoothScroll(headerHeight);

  const onButtonClick = () => {
    const resumePath =
      i18n.language === 'sv'
        ? '/files/SofiaMattiasson-CV-sv.pdf'
        : '/files/SofiaMattiasson-Resume-en.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download =
      i18n.language === 'sv'
        ? 'SofiaMattiasson-CV-sv.pdf'
        : 'SofiaMattiasson-Resume-en.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
        style={{
          paddingTop: `${headerHeight}px`,
          transition: 'padding-top 0.3s ease',
        }}
        className="bg-blend-multiply "
      >
        <section className="bg-[#436e74] dark:bg-[#16443e]">
          <Title
            id="portfolio"
            title={t('titlePortfolio')}
            dot={'.'}
            children={t('subTitlePortfolio')}
            className="bg-[#436e74] dark:bg-[#16443e] text-[#f39058] dark:text-[#d85f2d] mb-6 md:mb-8 lg:mb-10 leading-[0]"
            sticky
          />
          <div className="px-4 md:px-12 py-8 grid grid-row-1 lg:grid-cols-[50%_40%] 2xl:grid-cols-[40%_30%] gap-8 lg:gap-20 items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
              <div className="flex flex-col lg:gap-8 md:border-double md:border-4 py-8 px-0 md:px-8 border-[#f3d758] dark:border-[#d85f2d] rounded">
                <h1 className="text-[#f3d758] dark:text-[#d85f2d] text-md md:text-[3rem] xl:text-[5rem] xl:leading-[4.2rem] font-semibold tracking-wpide">
                  {t('mainSectionTitle').toUpperCase()}
                </h1>
                <p className="font-semibold tracking-wide">
                  {t('portfolioIntro')}
                </p>
                <div className="flex flex-col w-full xl:flex-row items-center mx-auto md:mt-8 gap-2">
                  <Button
                    onClick={onButtonClick}
                    className="flex flex-row justify-center items-center gap-4 bg-btn-bg text-bg-primary border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide"
                  >
                    <Icon
                      icon="line-md:cloud-alt-download"
                      width="30"
                      height="30"
                    />{' '}
                    {t('ctaButtonCV')}
                  </Button>
                  <NavLink
                    to={'/contact'}
                    className="flex flex-row w-full justify-center items-center gap-4 font-sub-heading bg-[#350712] border-3 border-[#350712] text-bg-primary dark:text-text-primary tracking-wide font-semibold hover:bg-bg-hover dark:hover:bg-[#350712ab] hover:border-bg-hover dark:hover:border-[#350712ab] hover:text-bg-primary  rounded text-base md:text-md lg:text-lg hover:shadow-lg px-4 py-2 cursor-pointer"
                  >
                    <Icon icon="line-md:email-twotone" width="30" height="30" />{' '}
                    {t('ctaButtonContactMe')}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/assets/images/portfolio/me-img.webp"
                alt="portfolio"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </section>

        <SvgWaves colorLight={'#436e74'} colorDark={'#16443e'} />
      </div>

      <section id="top-5-projects" className="top-0">
        <Title
          dangerouslyHTML={t(
            'portfolio/top5PortfolioSection:titleTop5Portfolio'
          )}
          dot={'.'}
          children={t('portfolio/top5PortfolioSection:subTitleTop5Portfolio')}
          className="bg-[#f5e3c8] dark:bg-[#1b0909] text-[#2ea25f] dark:text-[#cb384c] px-4 mb-6 md::mb-8 leading-[0]"
          sticky
          title={''}
        />
        <Top5projects />
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
          <FrontendPortfolio />
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
        <BackendPortfolio />
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
          <FullStackPortfolio />
        </SectionPlate>
        <RippedPaperBottom colorLight={'#9fc4bd'} colorDark={'#dc8e32'} />
      </section>

      <section id="graphic-design" className="top-0">
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
    </>
  );
};

export default PortfolioPage;
