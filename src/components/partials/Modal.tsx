import { Icon } from '@iconify/react';
import React from 'react';
import { useClickOutside } from '../../hook/useClickOutside';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const Modal = ({ show, onClose, title, children }: ModalProps) => {
    const ref = useClickOutside<HTMLDivElement>(() => onClose())


  return (
    show && (
      <>
        <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-80 " onClick={onClose} />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div ref={ref} className="bg-bg-primary dark:bg-[#1b0909] text-text-primary rounded-lg shadow-lg max-w-[90%] overflow-hidden pt-4 py-12 px-4 relative">
            <div className="flex items-center justify-end mb-2">
              <div onClick={onClose} className="cursor-pointer text-black dark:text-accent-primary hover:text-[#cb7e2c45] rounded-full flex justify-center">
                <Icon icon="line-md:close" width="40" height="40" />
              </div>
            </div>
            <div className="text-center mb-4  text-text-primary">{title}</div>
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