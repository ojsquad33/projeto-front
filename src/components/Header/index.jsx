import "./style/style.css";
import Logo2 from "../../assets/logo2.svg";
import Logout from "../../assets/logout.svg";
import usuarios from "../../services/database_usuarios.js";
import { Link } from "react-router-dom";

const Header = ({ text }) => {
  return (
    <header>
      <div className="left-side">
        <img src={Logo2} alt="Logo colorido." />
        <h1>{text}</h1>
      </div>
      <div className="right-side">
        <h1>Bem vindo, {usuarios[0].nome}!</h1>
        <Link to="/">
          <img src={Logout} alt="Clique para sair." />
        </Link>
      </div>
    </header>
  );
};

export default Header;
