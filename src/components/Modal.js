import React from "react";
import './Modal.css'

function Modal({closeModal}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className='titleCloseBtn'>
          <button onClick={()=> closeModal(false)}> X </button>
        </div>
        <div className="title">
            <h1>¿Estás seguro de que quieres abandonar este sitio web?</h1>
        </div>
        <div className="body">
            <p>¡Las suculentas se mueren sin tu atención!</p>
        </div>
        <div className="footer">
            <button onClick={()=> closeModal(false)} id='cancelButton'>Cancelar</button>
            <button>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
