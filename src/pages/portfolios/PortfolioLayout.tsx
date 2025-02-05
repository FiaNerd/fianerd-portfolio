import { useLayoutEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Title from "../../components/partials/Title"
import { useSmoothScroll } from "../../hook/useSmoothScroll"

const PortfolioLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation("portfolio")

      useLayoutEffect(() => {
          const header = document.getElementById("header");

          if (header) {
            setHeaderHeight(header.getBoundingClientRect().height);
          }
      }, []);
  
      useSmoothScroll(headerHeight ? 0 : headerHeight);
  
  return (
    <>
    <Title  id="portfolio" className="mt-[15em]" title={t("titlePortfolio")} dot={"."} children={t("subTitlePortfolio")} />

    {/* <Outlet /> */}
    </>
  )
}

export default PortfolioLayout