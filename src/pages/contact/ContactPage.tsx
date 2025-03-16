import { useLayoutEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/contact/ContactForm";
import Title from "../../components/partials/Title";
import formValidationSchema from "../../utils/contactFormValidation";
import useSmoothScroll from "../../hook/useSmoothScroll";
import { yupResolver } from "@hookform/resolvers/yup";

interface ContactFormInputs {
  name: string;
  companyName?: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation("contact/contact");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(formValidationSchema(t)),
  });

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useSmoothScroll(headerHeight);

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{ paddingTop: `${headerHeight}px`, transition: "padding-top 0.3s ease" }}
      className="bg-blend-multiply min-h-screen h-full lg:bg-[url('/assets/images/portfolio/fullstack/school/coffeshop/coffe-hero.jpg')] bg-cover bg-center w-full"
    >
      <Title
        id="contact"
        title={t("contactTitle")}
        dot={"?"}
        children={t("contactSubtitle")}
        className="text-[#d47166] top-0 dark:text-accent-primary"
        subHeadingClassName="text-text-secondary dark:text-text-secondary"
        light="bg-[#e7a48a]"
        dark="dark:bg-[#1d1617]"
        sticky
      />
      <div className="max-w-screen-lg mx-auto lg:bg-[#d47166] lg:dark:bg-[#1d1617] mb-20 grid grid-row md:grid-cols-[auto_45%] gap-4 justify-center items-center py-4 md:px-4 rounded-lg">
        <div className="flex flex-col items-center md:px-2 text-wrap">
          <h1 className="text-text-primary">{t("contactGreeting").toUpperCase()}</h1>
          <blockquote className="w-full space-y-8 px-2 mb-8 md:mb-0">
            <h4
              className="border-l-8 pl-[0.2em] border-[#159ea2] dark:border-pink-500 text-center"
              dangerouslySetInnerHTML={{ __html: t("contactIntro") }}
            ></h4>
            <p dangerouslySetInnerHTML={{ __html: t("contactSubIntro") }}></p>
          </blockquote>
        </div>

        <div className="bg-[#e7a48a] dark:bg-[#1d1617] flex flex-col py-4 px-4 lg:px-8 rounded-lg">
          <ContactForm onSubmit={onSubmit}  />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
