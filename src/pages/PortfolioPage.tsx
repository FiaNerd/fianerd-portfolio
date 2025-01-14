import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../component/Partial/Title";
import { useSmoothScroll } from "../hook/useSmoothScroll";

const PortfolioPage = () => {
    const { t } = useTranslation('portfolio');
    const [headerHeight, setHeaderHeight] = useState(0);
     useLayoutEffect(() => {
        const header = document.getElementById("header");
        if (header) {
          setHeaderHeight(header.getBoundingClientRect().height);
        }
      }, []);
    
      useSmoothScroll(headerHeight ? 0 : headerHeight);
    
  return (
    <>
     <Title id="portfolio" title={t('titlePortfolio')} dot={"."} children={t('subTitlePortfolio')} />
    </>
  )
}

export default PortfolioPage