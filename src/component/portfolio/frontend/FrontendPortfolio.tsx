import { useTranslation } from "react-i18next";


const FrontendPortfolio = () => {
  const { t } = useTranslation("portfolio");
  return (
    <section className=" max-w-screen-xl mx-auto px-4 ">
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: t('frontendPortfolioSection.introFrontendPortfolio')}} />
    </section>
  )
}

export default FrontendPortfolio