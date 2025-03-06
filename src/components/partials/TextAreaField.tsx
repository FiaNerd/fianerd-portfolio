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
                  className={`bg-[#fff] bg-opacity-40 dark:bg-[#000] text-text-seconday dark:text-white border dark:border-gray-300 rounded-lg p-2 border-gray-900 dark:border-opacity-60 placeholder-gray-800 dark:placeholder-gray-300 placeholder:text-[0.9rem] placeholder:opacity-30  ${className}`}
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