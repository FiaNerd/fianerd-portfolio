import { yupResolver } from "@hookform/resolvers/yup";
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/contact/ContactForm";
import Title from "../../components/partials/Title";
import { useSmoothScroll } from "../../hook/useSmoothScroll";
import formValidationSchema from "../../utils/contactFormValidation";



interface ContactFormInputs {
    name: string;
    companyName?: string;
    email: string;
    subject: string;
    message: string;
}



const ContactPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation(["contact/contact", "contact/contactForm", "contact/contactValidation"]);

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

    updateHeaderHeight(); // Set initial height
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useSmoothScroll(headerHeight);

  const onSubmit = (data: ContactFormInputs) => console.log(data);

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: "padding-top 0.3s ease",
      }}
      className="bg-blend-multiply min-h-screen bg-[url('/assets/images/portfolio/fullstack/school/coffeshop/coffe-hero.jpg')] bg-cover bg-center w-full "
    >
      <Title
        id="contact"
        title={t("contact/contact:contactTitle")}
        dot={"?"}
        children={t("contact/contact:contactSubtitle")}
        className="text-[#ca5b87] top-0 dark:text-accent-primary"
        subHeadingClassName="text-hover-text dark:text-text-secondary"
        light="bg-accent-secondary"
        dark="dark:bg-[#1d1617]"
        sticky
      />

      <div className="max-w-screen-lg mx-auto dark:bg-[#1d1617] grid grid-row md:grid-cols-[auto_45%] gap-4 justify-center items-center py-4 md:px-4 rounded-lg">
        <div className="flex flex-col items-center md:px-2 text-wrap">
          <h1 className="text-text-primary">{t("contact/contact:contactGreeting").toUpperCase()}</h1>
         
        
          <blockquote className="w-full space-y-8 px-4">
            <h4 className="border-l-8 pl-1 border-pink-500 text-center"
                dangerouslySetInnerHTML={{ __html: t("contactIntro") }}
            >
            </h4>
            <p className="dark:bg-[#1d1617] ">{t("contact/contact:contactSubIntro")}</p>
          </blockquote>
        </div>

        <div className="dark:bg-[#1d1617] flex flex-col py-4 px-8 rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};


export default ContactPage;

