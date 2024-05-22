import { useState } from 'react';
import Modal from './modalWindowSection.jsx';
import withdrawImg from '../assets/withdraw.png';
import './css/withdrawnSection.css';

export function ClickableIcon() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleIconClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <div className="icon-container">
          <button className="icon-button" onClick={handleIconClick}>
            <img src={withdrawImg} alt="Icon" className="icon" />
            <span className="icon-text">Withdrawn</span>
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
    );
}