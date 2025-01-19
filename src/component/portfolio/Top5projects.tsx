import { useTranslation } from "react-i18next"

const Top5projects = () => {
  const { t } = useTranslation("portfolio")
  return (
    <div className="max-w-screen-xl mx-auto">
      <p>{t('top5PortfolioSection.introTop5Portfolio')}</p>
    </div>
  )
}

export default Top5projects