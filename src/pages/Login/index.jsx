import "./style.scss";
import Logo from "../../assets/logo.png";
import Trilhas from "../../components/Trilhas";
import ModalLogin from "../Modal/login";
import ModalCadastro from "../Modal/cadastro";
import trilhas from "../../services/database";
import { useState } from "react";

function Login() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false);
  const handleModalLoginOpening = () => {
    setModalLoginIsOpen(true);
  };
  const handleModalCadastroOpening = () => {
    setModalCadastroIsOpen(true);
  };
  return (
    <div className="main-container">
      <div className="call-to-action">
        <img className="main-logo" src={Logo} alt="Logo da Orange Evolution." />
        <button className="btn-inicio" onClick={handleModalLoginOpening}>
          Entrar
        </button>
        <p onClick={handleModalCadastroOpening}>Criar uma conta</p>
      </div>
      <Trilhas />
      {modalLoginIsOpen && (
        <ModalLogin
          key={trilhas.id}
          handleModalCadastroOpening={handleModalCadastroOpening}
          onClose={() => setModalLoginIsOpen(false)}
        />
      )}
      {modalCadastroIsOpen && (
        <ModalCadastro
          key={trilhas.id}
          handleModalLoginOpening={handleModalLoginOpening}
          onClose={() => setModalCadastroIsOpen(false)}
        />
      )}
    </div>
  );
}

export default Login;
