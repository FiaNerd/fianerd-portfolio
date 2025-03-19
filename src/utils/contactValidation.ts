// utils/contactValidation.ts
import * as yup from "yup";

const getFormContactSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required(t("contact/contactValidation:nameRequired"))
      .min(2, t("contact/contactValidation:nameMin"))
      .max(32, t("contact/contactValidation:nameMax"))
      .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, t("contact/contactValidation:nameInvalid")),
    email: yup
      .string()
      .trim()
      .required(t("contact/contactValidation:emailRequired"))
      .email(t("contact/contactValidation:emailInvalid")),
    companyName: yup.string(),
    subject: yup
      .string()
      .trim()
      .required(t("contact/contactValidation:subjectRequired"))
      .min(2, t("contact/contactValidation:subjectMin"))
      .max(64, t("contact/contactValidation:subjectMax")),
    message: yup
      .string()
      .trim()
      .required(t("contact/contactValidation:messageRequired"))
      .min(10, t("contact/contactValidation:messageMin"))
      .max(1000, t("contact/contactValidation:messageMax")),
  });
};

export default getFormContactSchema;
