import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface Form {
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

export interface InputFiledProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  register?: any;
  className?: string;
  type?: string;
  autocomplete?: string;
}
