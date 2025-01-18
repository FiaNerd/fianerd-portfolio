// src/pages/portfolio/PortfolioPage.jsx
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../component/partial/Button";
import Title from "../../component/partial/Title";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioPage = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const { t } = useTranslation([
      "portfolio",
      "heroSection"
    ]);
  
    useLayoutEffect(() => {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    }, []);
  
    useSmoothScroll(headerHeight ? 0 : headerHeight);

    return (
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
                className="text-[#f39058] dark:text-[#cb384c] "
                subHeadingClassName="text-hover-text dark:text-text-secondary"
            />
            
            <div className="px-4 md:px-12 py-8 mx-auto grid grid-row-1 md:grid-cols-[50%_40%] gap-8 md:gap-20 ">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <h1 className="text-[#f3d758] dark:text-[#cb384c]">{t('portfolioSection.mainSectionTitle')}</h1>
                <p className="font-semibold tracking-wide">{t('portfolioSection.introPortfolio')}</p>
                <Button className="bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover dark:hover:bg-bg-secondary font-semibold tracking-wide w-full md:w-2/4">
                {t('portfolioSection.contactMe')}
                </Button>
            </div>
                <div className="flex justify-center items-center">
                    <img src="/assets/images/portfolio/me-img.webp" alt="portfolio" className="w-full h-auto object-cover rounded-lg mb-4" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
