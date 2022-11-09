import "./style.scss";
import Logo from "../../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const ModalLogin = ({
  id = "close",
  handleModalCadastroOpening,
  onClose = () => {},
}) => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  const handleOpenCadastro = () => {
    onClose();
    handleModalCadastroOpening();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth", {
        username: user,
        senha: pwd,
      });
      const accessToken = response?.data?.token; //alterar esse caminho
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response.");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password.");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized.");
      } else {
        setErrMsg("Login failed.");
      }
      errRef.current.focus();
    }
  };

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
          <button>Entrar</button>
        </form>
        <p className="cadastro">
          Não tem uma conta?{" "}
          <strong onClick={handleOpenCadastro}>Cadastre-se</strong>
        </p>
        <p
          ref={errRef}
          className={errMsg ? "show" : "hide"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;
