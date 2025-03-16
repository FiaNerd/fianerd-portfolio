import { ReactNode, createElement, forwardRef, ForwardedRef } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import Button from "./Button";
import { Icon } from "@iconify/react";

export type classNameType = string;
export type childrenType = ReactNode;

interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel: string;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  className?: string;
  isLoading: boolean;
  isSuccess: boolean;
}

const Form = forwardRef<HTMLFormElement, IFormProps>(({
  defaultValues,
  buttonLabel = "Submit",
  children,
  className,
  onSubmit,
  handleSubmit,
  register,
  isLoading,
  isSuccess,
  ...rest
}, ref: ForwardedRef<HTMLFormElement>) => {
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)} {...rest} className={className}>
      <div className="flex justify-content-center flex-wrap">
        {Array.isArray(children)
          ? children.map((child) => {
              if (child && child.props && child.props.name) {
                return createElement(child.type, {
                  ...child.props,
                  register,
                  key: child.props.name
                });
              }
              return child;
            })
          : children}
      </div>
      <Button disabled={isLoading} type="submit" className="flex flex-row justify-center items-center gap-2 border-2 border-text-primary hover:bg-text-primary dark:text-[#1d1617] hover:dark:text-text-primary dark:bg-accent-primary hover:opacity-80 dark:border-accent-primary dark:border-2 rounded-lg p-2">
        <Icon icon="fa:send" width="24" height="24" />
        {isLoading ? "Sending..." : buttonLabel}
      </Button>
    </form>
  );
});

export default Form;