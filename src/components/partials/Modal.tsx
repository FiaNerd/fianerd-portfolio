import { Icon } from '@iconify/react';
import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const Modal = ({ show, onClose, title, children }: ModalProps) => {
  return (
    show && (
      <>
        <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-70" onClick={onClose} />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1b0909] dark:text-[#f5f5f5] rounded-lg shadow-lg w-11/12 md:w-auto max-h-[80vh] overflow-hidden p-4 relative">
            <div className="flex items-center justify-end mb-2">
              <div onClick={onClose} className="cursor-pointer text-black dark:text-[#f5f5f5] rounded-full flex justify-center">
                <Icon icon="line-md:close" width="50" height="50" />
              </div>
            </div>
            <div className="text-center mb-4">{title}</div>
            <div className="flex justify-center items-center w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;