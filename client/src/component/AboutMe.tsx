import { useTranslation } from "react-i18next";
import Section from "./Partial/Section";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <Section bgColor="bg-bg-plate">
      {/* <Section
      className="bg-cover bg-center bg-no-repeat"
      bgImage="/assets/images/bg-img.jpg"
      // You can also pass other attributes like onClick, id, etc., if needed
    ></Section> */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 p-4 md:gap-10 md:grid-cols-2">
        <img src="/assets/images/me.jpeg" alt="Fia nerd" />
        <div>
          <h2>{t("title")}</h2>
          <p>{t("intro")}</p>
          <p>{t("bio")}</p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
