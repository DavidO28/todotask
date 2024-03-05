import "./Modal.scss";
import { ModalTypes } from "../../types/ModalTypes";

const Modal: React.FC<ModalTypes> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal">
        <div className="modal__content">{children}</div>
        <div className="modal__actions">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
