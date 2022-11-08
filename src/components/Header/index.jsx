import "./style.scss";
import Logo2 from "../../assets/logo2.svg";
import Logout from "../../assets/logout.svg";
import usuarios from "../../services/database_usuarios.js";
import { Link, Outlet, useParams } from "react-router-dom";
import trilhas from "../../services/database";

const Header = ({ text }) => {
  let { pag, trilha } = useParams();
  let title = !text ? trilhas[pag - 1].content[trilha - 1].trilha : text;
  return (
    <div className="header-pages">
      <header>
        <div className="left-side">
          <img src={Logo2} alt="Logo colorido." />
          <h1>{title}</h1>
        </div>
        <div className="right-side">
          <h1>Bem vindo, {usuarios[0].nome}!</h1>
          <Link to="/">
            <img src={Logout} alt="Clique para sair." />
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
