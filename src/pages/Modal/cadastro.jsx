import "./style/style.css";
import Logo from "../../assets/logo.png";

const ModalCadastro = ({ id = "close", onClose = () => {} }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
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
            <input type="text" id="nome" placeholder="Nome completo" required />
          </div>
          <div className="info">
            <input type="email" id="email" placeholder="E-mail" required />
          </div>
          <div className="info">
            <input type="password" id="senha" placeholder="Senha" required />
          </div>
          <div className="info">
            <input
              type="password"
              id="repetir-senha"
              placeholder="Repita a senha"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCadastro;
