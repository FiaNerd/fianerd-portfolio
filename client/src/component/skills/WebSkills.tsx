import { useTranslation } from "react-i18next";

const WebSkills = () => {
    const {t} = useTranslation("skills")
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
      <h1 className="text-text-sub-heading font-bold text-h1 whitespace-break-spaces">{t("skills:titleWeb")}</h1>
      <h2 className="text-text-sub-heading font-bold text-h2 whitespace-break-spaces">{t('titleWebDev')}</h2>
    </div>
  );
};

export default WebSkills;