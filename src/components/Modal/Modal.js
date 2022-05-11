import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { MdClose } from "../../constants/icon";

function Modal({ open, children, close }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal__underlay" onClick={close} />
      <div className="modal flex-column ">
        <div className="modal__close text-md icon-button" onClick={close}>
          <MdClose className="text-lg" />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
