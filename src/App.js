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
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
