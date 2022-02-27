import React from "react";
import { Overlay, ModalContainer, CloseBtn } from "./StyledModal.js";
// import { ALERT_VARIANTS, AlertWrapper, getBackgroundColor } from './Intento.js'


function Modal({ title, menssage, closeModal, openModal, children, variant }) {
  //console.log('coy children', children)
  return (
    <>
      {openModal && (
        <Overlay>
          <ModalContainer>
            <CloseBtn onClick={() => closeModal(false)}>
              <i className="fi fi-rs-cross-circle"></i>
            </CloseBtn>
            <h3>{title}</h3>
            <p>{menssage}</p>
            {children}
          </ModalContainer>

        </Overlay>
      )}
    </>
  );
}

export default Modal;
