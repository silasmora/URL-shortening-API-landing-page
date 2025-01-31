import React, { useState, useEffect } from 'react';
import AuthButtons from './AuthButtons';
import Navbar from './Navbar';

type isModalOpenProps = {
  isModalOpen: boolean
  handleOutsideClick: (e: MouseEvent) => void
  modalRef: React.RefObject<HTMLDivElement>
};

const MobileMenuModal: React.FC<isModalOpenProps> = ({ isModalOpen, handleOutsideClick, modalRef }) => {
  const [isModalFadeIn, setIsModalFadeIn] = useState<boolean>(false);
  
  useEffect(() => {
    if (isModalOpen) {
      setIsModalFadeIn(true);
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      setTimeout(() => setIsModalFadeIn(false), 200); // Small delay to prevent flickering
    }
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);
 
  return (
    <div data-cy='mobile-menu-modal'
      className={`ease-in-out duration-500 ${
        isModalFadeIn ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        ref={modalRef}
        className="bg-darkByzantineBlue border-2 border-blue-500 mx-6 px-6 rounded-[10px] h-[383px] flex flex-col items-center justify-center gap-7"
      >
        <div>
          <Navbar isModal={true} />
        </div>
        <div className="w-full border-t border-manatee border-opacity-20 mx-6" />
        <div className="w-full justify-self-start">
          <AuthButtons isModal={true} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuModal;
