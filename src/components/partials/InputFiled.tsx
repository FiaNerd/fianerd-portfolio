
interface InputFiledProps {
    name: string;
    label?: string;
    placeholder?: string;
    error?: string;
    register?: any;
    wrapperClass?: string;
    className?: string;
    type?: string;
}

const InputFiled = ({  register,
    name,
    placeholder,
    error,
    label,
    type,
    wrapperClass,
    ...rest }: InputFiledProps) => {
    return (
        <div className={wrapperClass}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          aria-invalid={error ? "true" : "false"}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        {error && <span role="alert">{error}</span>}
      </div>
    );
}

export default InputFiled;