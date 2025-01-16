// src/pages/portfolio/PortfolioPage.jsx
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../component/partial/Title";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const PortfolioPage = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const {t} = useTranslation('portfolio');

    useLayoutEffect(() => {
        const header = document.getElementById("header");
        if (header) {
          setHeaderHeight(header.getBoundingClientRect().height);
        }
    }, []);

    useSmoothScroll(headerHeight ? 0 : headerHeight);

    return (
        <>
            <Title
                id="portfolio"
                title={t('titlePortfolio')}
                dot="."
                children={t('subTitlePortfolio')}
                className="text-[#f39058] dark:text-[#cb384c] bg-[#436e74] dark:bg-[#16443e] mt-[10em]"
                subHeadingClassName="text-hover-text dark:text-text-secondary"
            />
            <div className="px-4 max-w-screen-xl">
                <p className="font-semibold tracking-wide">{t('introPortfolio')}</p>
            </div>
        </>
    );
};

export default PortfolioPage;
