import "./style/style.css";
import Logo from "../../assets/logo.png";
import Logout from "../../assets/logout.svg";
import { Link, Outlet} from "react-router-dom";

function HeaderAdmin() {
    return(
    <div className="header">
      <header>
        <div className="left-side">
          <img src={Logo} alt="Logo colorido." />
          <h1>Configurações</h1>
        </div>
        <div className="right-side">
          <h1>Bem vindo, Administrador!</h1>
          <Link to="/">
            <img src={Logout} alt="Clique para sair." />
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
    )
}

export default HeaderAdmin;