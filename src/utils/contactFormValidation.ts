// utils/validations/getFormContactSchema.ts
import * as yup from "yup";

const getFormContactSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    name: yup
      .string()
      .required(t("contact/contactValidation:nameRequired"))
      .min(2, t("contact/contactValidation:nameMin"))
      .max(32, t("contact/contactValidation:nameMax")),
    email: yup
      .string()
      .required(t("contact/contactValidation:emailRequired"))
      .email(t("contact/contactValidation:emailInvalid")),
    subject: yup
      .string()
      .required(t("contact/contactValidation:subjectRequired"))
      .min(2, t("contact/contactValidation:subjectMin"))
      .max(32, t("contact/contactValidation:subjectMax")),
    message: yup.string().required(t("contact/contactValidation:messageRequired")),
  });
};

export default getFormContactSchema;
