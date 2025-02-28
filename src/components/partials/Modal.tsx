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
  const ref = useClickOutside<HTMLDivElement>(() => onClose());

  return (
    show && (
      <>
        <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-80" onClick={onClose} />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div ref={ref} className="bg-bg-primary dark:bg-[#1b0909] text-text-primary rounded-lg shadow-lg max-w-[90%] max-h-[90%] overflow-auto pt-4 py-12 px-4 relative">
              <div onClick={onClose} className="cursor-pointer justify-end text-black dark:text-accent-primary hover:text-[#cb7e2c45] rounded-full flex ">
                <Icon icon="line-md:close" width="40" height="40" />
              </div>
            <div className="flex items-center justify-center mb-2">
              <h3 className="font-bold not-italic font-sub-heading text-center mb-4 text-text-primary">{title}</h3>
            </div>
            <div className="flex justify-center items-center w-full">
              {children}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;