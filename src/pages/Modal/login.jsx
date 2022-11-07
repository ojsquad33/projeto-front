import "./style.scss";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const ModalLogin = ({
  id = "close",
  handleModalCadastroOpening,
  onClose = () => {},
}) => {
  const navigate = useNavigate();
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
  const handleOpenCadastro = () => {
    onClose();
    handleModalCadastroOpening();
  };
  const direcionarPagina = () => {
    navigate("/home");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  useEffect(() => {
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={Logo} alt="Logo da Orange Evolution." />
        <form onSubmit={handleSubmit}>
          <div className="info">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="info">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <button type="submit" onClick={direcionarPagina}>
            Entrar
          </button>
        </form>
        <p className="cadastro">
          Não tem uma conta?{" "}
          <strong onClick={handleOpenCadastro}>Cadastre-se</strong>
        </p>
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

export default ModalLogin;
