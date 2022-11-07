import "./style.scss";
import Logo from "../../assets/logo.png";
import { useRef, useState, useEffect } from "react";

const ModalCadastro = ({
  id = "close",
  handleModalLoginOpening,
  onClose = () => {},
}) => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const handleOpenLogin = () => {
    onClose();
    handleModalLoginOpening();
  };

  useEffect(() => {
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={Logo} alt="Logo da Orange Evolution." />
        <form>
          <div className="info">
            <input
              type="text"
              id="nome"
              placeholder="Nome completo"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
            />
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
          <button type="submit" onClick={handleOpenLogin}>
            Cadastrar
          </button>
        </form>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
    </div>
  );
};

export default ModalCadastro;
