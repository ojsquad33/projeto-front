import "./style/style.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const ModalLogin = ({
  id = "close",
  handleModalCadastroOpening,
  onClose = () => {},
}) => {
  const navigate = useNavigate();
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const handleOpenCadastro = () => {
    onClose();
    handleModalCadastroOpening();
  };
  const direcionarPagina = () => {
    navigate("/home");
  };
  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={Logo} alt="Logo da Orange Evolution." />
        <form>
          <div className="info">
            <input type="email" id="email" placeholder="E-mail" required />
          </div>
          <div className="info">
            <input type="password" id="senha" placeholder="Senha" required />
          </div>
          <button type="submit" onClick={direcionarPagina}>
            Entrar
          </button>
        </form>
        <p className="cadastro">
          Não tem uma conta?{" "}
          <strong onClick={handleOpenCadastro}>Cadastre-se</strong>
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;
