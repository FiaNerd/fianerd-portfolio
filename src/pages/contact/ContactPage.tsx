import { yupResolver } from "@hookform/resolvers/yup";
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import Form from "../../components/partials/Form";
import InputFiled from "../../components/partials/InputFiled";
import Title from "../../components/partials/Title";
import { useSmoothScroll } from "../../hook/useSmoothScroll";



interface ContactFormInputs {
    name: string;
    companyName?: string;
    email: string;
    subject: string;
    message: string;
}


// validation
const EmailSchema = yup.object().shape({
  name: yup
    .string()
    .max(32, "Max name length is 32")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup
    .string()
    .max(32, "Max subject length is 32")
    .required("Subject is required"),
  message: yup
    .string()
    .required("Message is required"),
});


const ContactPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { t } = useTranslation('contact');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(EmailSchema) });

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
        title={t("contactTitle")}
        dot={"?"}
        children={t("contactSubtitle")}
        className="text-[#ca5b87] top-0 dark:text-accent-primary"
        subHeadingClassName="text-hover-text dark:text-text-secondary"
        light="bg-accent-secondary"
        dark="dark:bg-[#1d1617]"
        sticky
      />
     <div className="max-w-screen-lg dark:bg-[#1d1617] grid grid-row md:grid-cols-[auto_50%] gap-4 justify-center items-center py-4 md:px-8 rounded-lg">
             <div className="flex flex-col items-center px-2 md:px-4">
                 <h1 className="text-text-primary">{t('contactGreeting').toUpperCase()}</h1>

                 <div className="space-y-4 px-4">
                     <h3 className="text-center" dangerouslySetInnerHTML={{__html: t('contactIntro')}} ></h3>
                     <p className="dark:bg-[#1d1617] ">{t('contactSubIntro')}</p>
                 </div>
             </div>

             <div className="dark:bg-[#1d1617] flex flex-col py-4 px-8 rounded-lg">
                 <Form className="grid grid-cols-1 w-full gap-4"
                      buttonLabel={t('contactSubmit')}
                      register={register}
                      handleSubmit={handleSubmit}
                      onSubmit={onSubmit}
                    >
                     <InputFiled 
                      name="name" label={t('contactName')} 
                      register={register} type="text" error={errors.name?.message} placeholder={t('contactPlaceholderName')} />
                     <InputFiled name="email" type="email" label={t('contactEmail')} type="email"  register={register} error={errors.email?.message} placeholder={t('contactPlaceholderEmail')} />
                     <InputFiled name="companyName" label={t('contactCompanyName')} type="text" register={register}  placeholder={t('contactPlaceholderCompany')} />
                     <InputFiled name="subject" label={t('contactSubject')} type="text"  register={register} error={errors.subject?.message} placeholder={t('contactPlaceholderSubject')} />
                     <div className="flex flex-col mb-8">
                         <label htmlFor="message" className="text-text-secondary dark:text-text-primary">{t('contactMessage')}</label>
                         <textarea
                             id="message"
                             placeholder={t('contactPlaceholderMessage')}
                             {...register("message", { required: true })}
                             className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2"
                         />
                         {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                     </div>
                   
                 </Form>
             </div>
         </div>
         </div>
  );
};

export default ContactPage;

