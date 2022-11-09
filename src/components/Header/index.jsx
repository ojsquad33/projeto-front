import "./style.scss";
import Logo2 from "../../assets/logo2.svg";
import Logout from "../../assets/logout.svg";
import usuarios from "../../services/database_usuarios.js";
import { Link, Outlet, useParams } from "react-router-dom";
import cursos from "../../services/database_cursos";
import trilhasSemPaginacao from "../../services/database_all";

const Header = ({ text }) => {
  let { curso_id } = useParams();
  let curso = cursos.find((curso) => curso.id === Number(curso_id));
  let title = !text
    ? `Trilha: ${trilhasSemPaginacao[curso.trilha_id - 1].trilha}`
    : text;
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
