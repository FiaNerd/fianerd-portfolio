import { useTranslation } from "react-i18next";

const WebSkills = () => {
    const {t} = useTranslation("skills")
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
      <h2 className="text-h1 whitespace-break-spaces">{t("skills:titleWeb")}</h2>
    </div>
  );
};

export default WebSkills;