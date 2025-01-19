// src/pages/portfolio/PortfolioPage.jsx
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SvgWaves from "../../assets/svg/svgWaves";
import Button from "../../component/partial/Button";
import Title from "../../component/partial/Title";
import Top5projects from "../../component/portfolio/Top5projects";
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
                    <div className="bg-[#436e74] dark:bg-[#16443e]">

            
                    <Title
                        id="portfolio"
                        title={t('portfolioSection.titlePortfolio')}
                        dot="."
                        children={t('portfolioSection.subTitlePortfolio')}
                        className="text-[#f39058] dark:text-[#cb384c] mb-6 md:mb-8 lg:mb-10"
                        subHeadingClassName="text-hover-text dark:text-text-secondary"
                        />

                
                <div className="px-4 md:px-12 py-8 grid grid-row-1 lg:grid-cols-[50%_40%] 2xl:grid-cols-[40%_30%] gap-8 lg:gap-20 items-center justify-center">
                        <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-8">
                            <div className="flex flex-col lg:gap-8 md:border-double md:border-4 py-8 px-0 md:px-8 border-[#f3d758] dark:border-[#cb9838] rounded">
                                <h1 className="text-[#f3d758] dark:text-[#cb9838]">{t('portfolioSection.mainSectionTitle')}</h1>
                                <p className="font-semibold tracking-wide">{t('portfolioSection.introPortfolio')}</p>

                                <div className="flex flex-col w-full md:flex-row items-center mx-auto md:mt-8 gap-8">
                                    <Button className=" bg-btn-bg text-bg-primary border-btn-bg hover:border-bg-hover hover:bg-bg-hover font-semibold tracking-wide">
                                        {t("portfolioSection.ctaButtonCV")}
                                    </Button>
                                    <Button className=" bg-[#350712] border-[#350712] text-bg-primary dark:text-text-primary tracking-wide font-semibold hover:bg-bg-hover dark:hover:bg-[#350712ab] hover:border-bg-hover  dark:hover:border-[#350712ab] hover:text-bg-primary ">
                                        {t("portfolioSection.ctaButtonContactMe")}
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        <div className="flex justify-center items-center">
                            <img src="/assets/images/portfolio/me-img.webp" alt="portfolio" className="w-full h-auto object-cover rounded-lg mb-4" />
                        </div>
                    </div>
                </div>
                    <SvgWaves colorLight={"#436e74"} colorDark={"#16443e"} />
            </div>

            <section className="section top-0">
                <Title
                    id="top5projects"
                    title={t('top5PortfolioSection.titleTop5Portfolio')}
                    dot="."
                    children={t('top5PortfolioSection.subTitleTop5Portfolio')}
                    className="text-[#2ea25f] dark:text-[#cb384c] mb-6 md:mb-8 lg:mb-10"
                    // subHeadingClassName="text-text-primary dark:text-text-secondary"
                />
                <Top5projects />
            </section>
        </>
    );
};

export default PortfolioPage;
