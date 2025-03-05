import { UseFormRegister } from "react-hook-form";

interface TextAreaFieldProps {
    name: string;
    label?: string;
    placeholder?: string;
    error?: string;
    register: UseFormRegister<any>;
    className?: string;
}

const TextAreaField = ({ register, name, placeholder, error, label, className, ...rest }: TextAreaFieldProps) => {
    return (
        <div className={`${className} flex flex-col gap-1 mt-4 w-full`}>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                  className={`dark:bg-[#000] dark:text-text-primary border-2 dark:border-[#000] rounded-lg p-2 placeholder-gray-300 placeholder:text-[0.9rem] opacity-30  ${className}`}
                  aria-invalid={error ? "true" : "false"}
                  placeholder={placeholder}
                  {...register(name)}
                  {...rest}
            />
            {error && <span role="alert" className="text-red-700 dark:text-red-500 text-[1rem]">{error}</span>}
        </div>
    );
};

export default TextAreaField;