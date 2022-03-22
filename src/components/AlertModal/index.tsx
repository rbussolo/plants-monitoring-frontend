import { Link } from "react-router-dom";
import { Modal } from "./styles";

import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SuccessIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

interface AlertModalProps {
  type: string;
  title: string;
  message: string;
  link?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function AlertModal({ isOpen, type, title, message, link, onClose }: AlertModalProps) {
  function closeModal(){
    onClose();
  }

  return (
    <Modal className={ isOpen ? "show-modal" : "hide-modal"}>
      <div>
        <div className={"modal-header modal-" + type}>
          { type === "success" && <SuccessIcon /> }
          { type === "error" && <ErrorIcon />}
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          {link && <Link to={link} >Close</Link>}
          {!link && <button onClick={closeModal}>Close</button>}
        </div>
      </div>
    </Modal>
  )
}