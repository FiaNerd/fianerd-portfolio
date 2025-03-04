import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/contact/ContactForm";
import Title from "../../components/partials/Title";
import { useSmoothScroll } from "../../hook/useSmoothScroll";

const ContactPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation('contact');

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);
  
  useSmoothScroll(headerHeight ? 0 : headerHeight);

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}
      className="bg-blend-multiply bg-[url('/assets/images/portfolio/fullstack/school/coffeshop/coffe-hero.jpg')] bg-cover bg-center w-full h-full"
    >
      <Title
        id="contact"
        title={t("contactTitle")}
        dot={"?"}
        children={t("contactSubtitle")}
        className="text-[#ca5b87] top-0 dark:text-accent-primary"
        subHeadingClassName="text-hover-text dark:text-text-secondary"
        light="bg-accent-secondary"
        dark="dark:bg-[#1d1617]"
        sticky
      />
      <div className="px-2 mb-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;