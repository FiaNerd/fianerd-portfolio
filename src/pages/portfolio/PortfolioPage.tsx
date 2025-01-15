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
        <div>
            {/* <Top5projects /> */}
            <Title
                id="portfolio"
                title={'TEST'}
                dot="."
                children={t('subTitlePortfolio')}
                className="mt-10"
                />

                <p>Portfolio page</p>
        </div>
    );
};

export default PortfolioPage;
