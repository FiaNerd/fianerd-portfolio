import { Icon } from "@iconify/react/dist/iconify.js";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RippedPaperBottom from "../../assets/svg/RippedPaperBottom";
import RippedPaperTop from "../../assets/svg/RippedPaperTop";
import SvgWaves from "../../assets/svg/SvgWaves";
import Button from "../../components/partials/Button";
import SectionPlate from "../../components/partials/SectionPlate";
import Title from "../../components/partials/Title";
import BackendPortfolio from "../../components/portfolios/BackendPortfolio";
import FrontendPortfolio from "../../components/portfolios/FrontendPortfolio";
import FullStackPortfolio from "../../components/portfolios/FullStackPortfolio";
import Top5projects from "../../components/portfolios/Top5projects";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation([
    "portfolio",
  ]);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  useSmoothScroll(headerHeight ? 0 : headerHeight);

  return (
    <>
      <div
        style={{
          paddingTop: `${headerHeight}px`,
          transition: "padding-top 0.3s ease",
        }}
        className="bg-blend-multiply "
      >
        <section className="bg-[#436e74] dark:bg-[#16443e]">
          <Title
            id="portfolio" 
            title={t('portfolio.titlePortfolio')}
            dot={"."}
            children={t('portfolio.subTitlePortfolio')}
            className="bg-[#436e74] dark:bg-[#16443e] text-[#f39058] dark:text-[#d85f2d] mb-6 md:mb-8 lg:mb-10 "
            sticky
          />
          <div className="px-4 md:px-12 py-8 grid grid-row-1 lg:grid-cols-[50%_40%] 2xl:grid-cols-[40%_30%] gap-8 lg:gap-20 items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
              <div className="flex flex-col lg:gap-8 md:border-double md:border-4 py-8 px-0 md:px-8 border-[#f3d758] dark:border-[#d85f2d] rounded">
                <h1 className="text-[#f3d758] dark:text-[#d85f2d] text-md md:text-[3rem] xl:text-[5rem] xl:leading-[4.2rem] font-semibold tracking-wide">
                  {t('portfolio.mainSectionTitle').toUpperCase()}
                </h1>
                <p className="font-semibold tracking-wide">
                  {t('portfolio.portfolioIntro')}
                </p>
                <div className="flex flex-col w-full xl:flex-row items-center mx-auto md:mt-8 gap-8">
                  <Button className="flex flex-row justify-center items-center gap-4 bg-btn-bg text-bg-primary border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide">
                    <Icon icon="line-md:cloud-alt-download" width="30" height="30" />  {t("portfolio.ctaButtonCV")}
                  </Button>
                  <Button className="flex flex-row justify-center items-center gap-4 bg-[#350712] border-[#350712] text-bg-primary dark:text-text-primary tracking-wide font-semibold hover:bg-bg-hover dark:hover:bg-[#350712ab] hover:border-bg-hover dark:hover:border-[#350712ab] hover:text-bg-primary">
                    <Icon icon="line-md:email-twotone" width="30" height="30" /> {t("portfolio.ctaButtonContactMe")}
                  </Button>
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

        <SvgWaves colorLight={"#436e74"} colorDark={"#16443e"} />
      </div>

      <section id="top5projects" className="top-0">
        <Title
          dangerouslyHTML={t('top5PortfolioSection.titleTop5Portfolio')}
          dot={"."}
          children={t('top5PortfolioSection.subTitleTop5Portfolio')}
          className="bg-[#f5e3c8] dark:bg-[#1b0909] text-[#2ea25f] dark:text-[#cb384c] px-4 mb-6 md::mb-8 "
          sticky 
        />
        <Top5projects />
      </section>


        <RippedPaperTop id="frontend" colorLight={"#f69497"} colorDark={"#4a2342"} />
          <SectionPlate className="bg-[#f69497] dark:bg-[#4a2342]">
            <Title 
              title={t('frontendPortfolioSection.titleFrontendPortfolio')} 
              dot={"."}
              children={t("frontendPortfolioSection.subTitleFrontendPortfolio")} 
              className=" text-[#ca0416] dark:text-[#d6a70d] bg-[#f69497] dark:bg-[#4a2342] px-4 mt-0 mb-6 md:mb-8"
              sticky
            />
            <FrontendPortfolio />
          </SectionPlate>
          <RippedPaperBottom colorLight={"#f69497"} colorDark={"#4a2342"} />


          <section id="backend" className="top-0 mb-12">
             <Title 
              title={t('backendPortfolioSection.titlePortfolioBackend')} 
              dot={"."}
              children={t("backendPortfolioSection.subTitlePortfolioBackend")} 
              className="text-[#ec4428] dark:text-[#1d7ecc] bg-[#fff5d7] dark:bg-[#1b0909] px-4 mt-0 mb-6 md:mb-8"
              sticky 
            />
            <BackendPortfolio />
          </section>

          <section id="fullstack" >
            <RippedPaperTop colorLight={"#9fc4bd"} colorDark={"#dc8e32"} />
                <SectionPlate className="bg-[#9fc4bd] dark:bg-[#dc8e32]">
                  <Title 
                    title={t('fullstackPortfolioSection.titlePortfolioFullstack')} 
                    dot={"."} 
                    children={t("fullstackPortfolioSection.subTitlePortfolioFullstack")} 
                    className=" text-[#064352] dark:text-[#831518] bg-[#9fc4bd] dark:bg-[#dc8e32] px-4 mt-0 mb-6 md:mb-8"
                    subHeadingClassName="text-text-secondary dark:text-[#1b0909]"
                    sticky
                  />
                <FullStackPortfolio />
              </SectionPlate>
            <RippedPaperBottom colorLight={"#9fc4bd"} colorDark={"#dc8e32"} />
          </section>
                  
    </>
  );
};

export default PortfolioPage;