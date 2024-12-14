import React, { useRef, useState, useEffect } from 'react';
import AuthButtons from './AuthButtons';
import Navbar from './Navbar';

type isModalOpenProps = {
  isModalOpen: boolean; // Required boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to update state
};

const MobileMenuModal: React.FC<isModalOpenProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [isModalFadeIn, setIsModalFadeIn] = useState<boolean>(false);
  
  const modalRef = useRef<HTMLDivElement>(null)
  
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      setIsModalFadeIn(true)
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)

    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    } 
  }, [isModalOpen,])
 
  return (
    <div data-cy='mobile-menu-modal'
      className={`ease-in-out duration-500 ${
        isModalFadeIn ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div
        ref={modalRef}
        className="bg-darkByzantineBlue mx-6 px-6 rounded-[10px] h-[383px] flex flex-col items-center justify-center gap-7"
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
