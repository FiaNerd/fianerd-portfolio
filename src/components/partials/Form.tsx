import { createElement, forwardRef, ForwardedRef, ReactNode } from "react";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import Button from "./Button";
import { Icon } from "@iconify/react";

export interface IFormProps {
  children?: ReactNode;
  buttonLabel: string;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  className?: string;
  isLoading: boolean;
  isSuccess?: boolean;
  buttonLoading: string;
}

const Form = forwardRef<HTMLFormElement, IFormProps>(({
  buttonLabel = "Submit",
  children,
  className,
  onSubmit,
  handleSubmit,
  register,
  isLoading,
  buttonLoading,
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
      <Button disabled={isLoading} type="submit" className="flex flex-row justify-center mt-8 items-center gap-2 border-2 border-text-primary  hover:bg-[#d47166] dark:text-[#1d1617] hover:dark:text-text-primary dark:bg-accent-primary hover:opacity-80 dark:border-accent-primary dark:border-2 rounded-lg p-2">

        {isLoading ? (
          <>
            <Icon icon="eos-icons:three-dots-loading" width="24" height="24" />
            <span>{buttonLoading}</span>
          </>
        ) : (
          <>
            <Icon icon="fa:send" width="24" height="24" />
            <span>{buttonLabel}</span>
          </>
        )}
      </Button>
    </form>
  );
});

export default Form;
