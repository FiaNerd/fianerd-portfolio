// src/pages/portfolio/PortfolioPage.jsx
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../component/partial/Title";
import HeroPortfolioImage from "../../component/portfolio/HeroPortfolioImage";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioPage = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const { t } = useTranslation([
      "portfolio"
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
                className="bg-blend-multiply"
            >
            <div>
             <HeroPortfolioImage />
            </div>

            <Title
                id="portfolio"
                title={t('titlePortfolio')}
                dot="."
                children={t('subTitlePortfolio')}
                className="text-[#f39058] dark:text-[#cb384c] bg-[#436e74] dark:bg-[#16443e]"
                subHeadingClassName="text-hover-text dark:text-text-secondary"
            />
            
            <div className="px-4 max-w-screen-xl">
                <p className="font-semibold tracking-wide">{t('introPortfolio')}</p>
            </div>
        </div>
    );
};

export default PortfolioPage;
