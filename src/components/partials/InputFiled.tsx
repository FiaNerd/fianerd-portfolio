
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
          {label && <label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />}
          
        <input
          type={type}
          className={`bg-[#fff] bg-opacity-40 dark:bg-[#000] text-pink-800 dark:text-text-primary border border-gray-900 dark:border-opacity-50 dark:border-gray-300 rounded-lg p-2 placeholder-gray-900 dark:placeholder-gray-300 placeholder:text-[0.9rem] placeholder:opacity-30  ${className}`}
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