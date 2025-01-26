import { useTranslation } from "react-i18next";
import Portfolio from "../../partial/Portfolio";


const FrontendPortfolio = () => {
  const { t } = useTranslation("portfolio");
  return (
    <section className=" max-w-screen-xl mx-auto px-4 ">
        <p className="mb-12" dangerouslySetInnerHTML={{ __html: t('frontendPortfolioSection.introFrontendPortfolio')}} />
        <Portfolio />
    </section>
  )
}

export default FrontendPortfolio