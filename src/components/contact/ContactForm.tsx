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

  console.log(errors);

  const onSubmit = (data: ContactFormInputs) => console.log(data);

  return (
  
          <Form
            className="grid grid-cols-1 w-full "
            buttonLabel={t("contactSubmit")}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >
            <InputFiled
              name="name"
              label={t("contactName")}
              register={register}
              type="text"
              error={errors.name?.message}
              placeholder={t("contactPlaceholderName")}
            />

            <InputFiled
              name="email"
              type="email"
              label={t("contactEmail")}
              register={register}
              error={errors.email?.message}
              placeholder={t("contactPlaceholderEmail")}
            />

            <InputFiled
              name="companyName"
              label={t("contactCompanyName")}
              type="text"
              register={register}
              placeholder={t("contactPlaceholderCompany")}
            />

            <InputFiled
              name="subject"
              label={t("contactSubject")}
              type="text"
              register={register}
              error={errors.subject?.message}
              placeholder={t("contactPlaceholderSubject")}
            />

            <TextAreaField
              name="message"
              label={t("contactMessage")}
              register={register}
              error={errors.message?.message}
              placeholder={t("contactPlaceholderMessage")}
              className="mb-1"
            />
            <p className="text-[0.9rem]">{t("contact/contactForm:mandatoryFields")}</p>
          </Form>
  );
};


export default ContactPage;

