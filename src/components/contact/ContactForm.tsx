import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/partials/InputFiled";
import TextAreaField from "../../components/partials/TextAreaField";
import getFormContactSchema from "../../utils/contactValidation";
import Form from "../../components/partials/Form";
import { useState, useEffect } from "react";
import { sendCustomEmail } from "../../utils/sendCustomEmail";

interface IContactFormInputs {
  name: string;
  companyName?: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { t, i18n } = useTranslation(["contact/contactForm"]);
  
  const [formValidationSchema, setFormValidationSchema] = useState(getFormContactSchema(t));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IContactFormInputs>({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: IContactFormInputs) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await sendCustomEmail(data);
      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(t("contactErrorMessage"));
    }
    setIsLoading(false);
  };

  
  useEffect(() => {
    setFormValidationSchema(getFormContactSchema(t));
    reset(undefined, { keepValues: true });
  }, [t, i18n.language]);

  return (
    <Form
      buttonLabel={t("contactSubmit")}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 w-full"
      isLoading={isLoading}
      buttonLoading={t("contactSubmitting")}
    >
      <InputField
        name="name"
        label={t("contactName")}
        register={register}
        error={errors.name?.message}
        placeholder={t("contactPlaceholderName")}
      />
      <InputField
        name="email"
        label={t("contactEmail")}
        type="email"
        register={register}
        error={errors.email?.message}
        placeholder={t("contactPlaceholderEmail")}
      />
      <InputField
        name="companyName"
        label={t("contactCompanyName")}
        register={register}
        placeholder={t("contactPlaceholderCompany")}
      />
      <InputField
        name="subject"
        label={t("contactSubject")}
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
      />
      {isSuccess && <p className="font-bold text-lime-900 dark:text-green-500">{t("contactSuccessMessage")}</p>}
      {errorMessage && <p className="font-bold text-red-800 dark:text-red-500">{errorMessage}</p>}
    </Form>
  );
};

export default ContactForm;
