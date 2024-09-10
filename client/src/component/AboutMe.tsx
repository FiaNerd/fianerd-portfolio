import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");

  return (
    <section className="bg-bg-plate">
 {/* <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/bg-img.jpg')" }}>

  className="bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url('/assets/images/bg-img.jpg')" }}
 >       */}
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 p-4 md:gap-10 md:grid-cols-2">
        <img src="./public/assets/images/me.jpeg" alt="Fia nerd" />
        <div>
          <h2>{t("title")}</h2>
          <p>{t("intro")}</p>
          <p>{t("bio")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
