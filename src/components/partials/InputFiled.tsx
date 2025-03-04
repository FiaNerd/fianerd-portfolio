import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputFiledProps {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    register: UseFormRegister<any>; // Accept the register function as a prop
    errors: FieldErrors<any>; // Accept the errors object as a prop
}

const InputFiled = ({ name, label, type, required = false, register, errors, ...rest }: InputFiledProps) => {
    const error = errors[name]?.message;

    return (
        <div className={`flex flex-col ${error ? 'has-error' : ''}`}>
            <label htmlFor={name} className="text-text-secondary dark:text-[#dfcaa5]">{label}</label>
            <input
                type={type || 'text'}
                id={name}
                {...register(name, { required })}
                {...rest}
                className="dark:bg-[#1d1617] dark:text-text-primary dark:border-accent-primary dark:border-2 rounded-lg p-2"
            />
            {error && typeof error === 'string' && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default InputFiled;