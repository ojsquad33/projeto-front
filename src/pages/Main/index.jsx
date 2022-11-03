import "./style/style.css";
import logo from "../../assets/logo.png";
import Trilhas from "../../components/Trilhas";

function Main() {
  return (
    <div className="container">
      <div className="call-to-action">
        <img className="main-logo" src={logo} alt="Logo da Orange Evolution." />
        <button className="btn-inicio">Entrar</button>
        <p>Criar uma conta</p>
      </div>
      <Trilhas />
    </div>
  );
}

export default Main;
