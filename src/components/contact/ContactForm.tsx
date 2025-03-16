import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
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

interface ContactFormProps {
  onSubmit: (data: ContactFormInputs) => void;
}

const ContactForm: ForwardRefExoticComponent<RefAttributes<HTMLFormElement> & ContactFormProps> = forwardRef<
  HTMLFormElement,
  ContactFormProps
>(({ onSubmit }, ref) => {
  const { t } = useTranslation("contact/contactForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(formValidationSchema(t)),
    mode: "onBlur",
  });

  return (
    <Form
      ref={ref}
      buttonLabel={t("contactSubmit")}
      register={register}
      handleSubmit={handleSubmit} // Pass handleSubmit to Form
      onSubmit={onSubmit} // Pass the onSubmit function to Form
      className="grid grid-cols-1 w-full"
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
});

export default ContactForm;
