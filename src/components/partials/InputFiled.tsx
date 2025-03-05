
interface InputFiledProps {
    name: string;
    label?: string;
    placeholder?: string;
    error?: string;
    register?: any;
    className?: string;
    type?: string;
}

const InputFiled = ({  register,
    name,
    placeholder,
    error,
    label,
    type,
    className,
    ...rest }: InputFiledProps) => {
    return (
        <div className={`${className} flex flex-col gap-1 mt-4 w-full`}>
        {label && <label htmlFor={name}>{label}</label>}

        <input
          type={type}
          className={`dark:bg-[#000] dark:text-text-primary border-2 dark:border-[#000] rounded-lg p-2 placeholder-gray-300 placeholder:text-[0.9rem] opacity-30  ${className}`}
          aria-invalid={error ? "true" : "false"}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        {error && <span role="alert" className="text-red-700 dark:text-red-500 text-[1rem]">{error}</span>}
      </div>
    );
}

export default InputFiled;