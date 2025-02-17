import { Icon } from '@iconify/react';
import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string
    children?: React.ReactNode;
}

const Modal = ({show, onClose, title, children}: ModalProps) => {
  return (
    show &&(
      <>
    <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-70" onClick={onClose} />
        <div className="p-4 mt-10 bg-white dark:bg-[#1b0909] dark:text-[#f5f5f5] rounded-lg shadow-lg w-11/12 md:w-[40em] max-h-[80%] md:h-auto mx-auto z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="">
            <div className="flex items-center justify-between mb-10">
                <div className="">{title}</div>
                    <div onClick={onClose} className="items-center cursor-pointer text-black dark:text-[#f5f5f5] rounded-full flex justify-center">
                    <Icon icon="line-md:close" width="50" height="50"  /> 
                    </div>
                </div>
            <div>{children}</div>
        </div>
    </div>
    </>
    )
  )
}

export default Modal