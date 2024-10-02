import { useTranslation } from "react-i18next";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";

const HomePage = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <div className="text-center mb-8">
      <h1>
        {t('title')}
        <span className="text-accent-primary ml-2">{t('question')}</span>
      </h1>
      <h3>{t('intro')}</h3>
      </div>
      <AboutNav />
      <AboutMe />
    </>
  );
};

export default HomePage;
