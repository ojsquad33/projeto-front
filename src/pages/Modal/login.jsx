import "./style.scss";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const ModalLogin = ({
  id = "close",
  handleModalCadastroOpening,
  onClose = () => {},
}) => {
  const { setAuth } = useContext(AuthContext);
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
    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {}
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
          <button>Entrar</button>
        </form>
        <p className="cadastro">
          Não tem uma conta?{" "}
          <strong onClick={handleOpenCadastro}>Cadastre-se</strong>
        </p>
        {success ? (
          <section>
            <h1>Success!</h1>
            {setTimeout(direcionarPagina, 700)}
          </section>
        ) : (
          <p
            ref={errRef}
            className={errMsg ? "show" : "hide"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
