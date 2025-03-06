

import { FC, ReactNode, createElement } from "react";
import Button from "./Button";
import { Icon } from "@iconify/react";

export type classNameType = string;
export type childrenType = ReactNode;

export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  className?: classNameType;
}

const Form: FC<IFormProps> = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  className,
  onSubmit,
  handleSubmit,
  register,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest} className={className} >
      <div className="flex justify-content-center flex-wrap">
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name
                    }
                  })
                : child;
            })
          : children}
      </div>
      <Button className="flex flex-row justify-center items-center gap-2 border-2 border-text-primary hover:bg-text-primary dark:text-[#1d1617] hover:dark:text-text-primary dark:bg-accent-primary hover:opacity-80 dark:border-accent-primary dark:border-2 rounded-lg p-2">
        <Icon icon="fa:send" width="24" height="24" />
          {buttonLabel}
      </Button>
    </form>
  );
};

export default Form;
