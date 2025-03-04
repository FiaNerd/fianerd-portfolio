import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Button from "../partials/Button";
import InputFiled from "../partials/InputFiled";

interface ContactFormInputs {
    name: string;
    companyName?: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const { t } = useTranslation('contact');

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();
    const onSubmit: SubmitHandler<ContactFormInputs> = data => {
        // Handle form submission
        console.log(data);
    };

    const validateEmail = (value: string) => {
        // Custom email validation logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || 'Invalid email format';
    };

    return (
        <div className="max-w-screen-lg mx-auto dark:bg-[#1d1617] grid grid-row md:grid-cols-[auto_50%] gap-4 justify-center items-center py-4 md:px-8 rounded-lg">
            <div className="flex flex-col items-center">
                <h1 className="text-text-primary">HELLO</h1>
                <p className="dark:bg-[#1d1617] py-4 px-8 ">{t('contactIntro')}</p>
            </div>

            <div className="dark:bg-[#1d1617] flex flex-col items-center py-4 px-8 rounded-lg">
                <form className="grid grid-cols-1 w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <InputFiled name="name" label={t('contactName')} type="text" required register={register} errors={errors} />
                    <InputFiled name="email" label={t('contactEmail')} type="email" required register={register} errors={errors} />
                    <InputFiled name="companyName" label={t('contactCompanyName')} type="text" register={register} errors={errors} />
                    <InputFiled name="subject" label={t('contactSubject')} type="text" required register={register} errors={errors} />
                    <div className="flex flex-col mb-8">
                        <label htmlFor="message" className="text-text-secondary dark:text-text-primary">{t('contactMessage')}</label>
                        <textarea
                            id="message"
                            {...register("message", { required: true })}
                            className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2"
                        />
                        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="dark:text-[#1d1617] hover:dark:text-text-primary dark:bg-accent-primary hover:opacity-80 dark:border-accent-primary dark:border-2 rounded-lg p-2">{t('contactSubmit')}</Button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;