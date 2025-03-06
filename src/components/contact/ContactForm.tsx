import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Form from "../../components/partials/Form";
import InputFiled from "../../components/partials/InputFiled";
import TextAreaField from "../../components/partials/TextAreaField";
import formValidationSchema from "../../utils/contactFormValidation";



interface ContactFormInputs {
    name: string;
    companyName?: string;
    email: string;
    subject: string;
    message: string;
}



const ContactPage = () => {
  const { t } = useTranslation("contact/contactForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(formValidationSchema(t)), 
  });


  const onSubmit = (data: ContactFormInputs) => console.log(data);

  return (
  
          <Form
            className="grid grid-cols-1 w-full gap-8"
            buttonLabel={t("contact/contactForm:contactSubmit")}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >
            <InputFiled
              name="name"
              label={t("contact/contactForm:contactName")}
              register={register}
              type="text"
              error={errors.name?.message}
              placeholder={t("contact/contactForm:contactPlaceholderName")}
            />

            <InputFiled
              name="email"
              type="email"
              label={t("contact/contactForm:contactEmail")}
              register={register}
              error={errors.email?.message}
              placeholder={t("contact/contactForm:contactPlaceholderEmail")}
            />

            <InputFiled
              name="companyName"
              label={t("contact/contactForm:contactCompanyName")}
              type="text"
              register={register}
              placeholder={t("contact/contactForm:contactPlaceholderCompany")}
            />

            <InputFiled
              name="subject"
              label={t("contact/contactForm:contactSubject")}
              type="text"
              register={register}
              error={errors.subject?.message}
              placeholder={t("contact/contactForm:contactPlaceholderSubject")}
            />

            <TextAreaField
              name="message"
              label={t("contact/contactForm:contactMessage")}
              register={register}
              error={errors.message?.message}
              placeholder={t("contact/contactForm:contactPlaceholderMessage")}

            />
          </Form>
  );
};


export default ContactPage;

