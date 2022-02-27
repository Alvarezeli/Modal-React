import { useState } from "react";
import "./App.css";
import Modal from "../src/components/Modal.js";


function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1>Hola, pulsa el botón para abrir modal</h1>
      <button className="abrirmodal" onClick={() => setOpenModal(true)}>
        Abrir
      </button>
    <Modal closeModal={setOpenModal} openModal={openModal}
    title='Santi feo'
    menssage='By Eli'
  
    >
      <img
          src={require("../src/check-mark.png")}
          alt="add-expense"
          className="add-img"
        />
      </Modal>
    </div>
  );
}

export default App;
