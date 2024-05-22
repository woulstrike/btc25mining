/* eslint-disable react/prop-types */
import './css/modalWindowSection.css'

export default function Modal({ isOpen, onClose }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-background" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>Coming soon...</p>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
}