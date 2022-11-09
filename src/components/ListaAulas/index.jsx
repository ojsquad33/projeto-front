import "./style/style.css";
import Topicos from "../Topicos";
import cursos from "../../services/database_cursos";
import { useParams } from "react-router-dom";

function ListaAulas(){
  let { curso_id } = useParams()
  let curso = cursos.find((curso) => curso.id === Number(curso_id))
    return(
        <div className="aulas">
          <nav>
            <ul>
              <li><a href="#">{cursos[curso.id - 1].nome}</a>
                <ul>
                {cursos.map((modulo, index) => {
                  var trilha = cursos[curso.id - 1].trilha_id;
                  if (modulo.trilha_id == trilha) {
                  return (
                      <li key={index}><a href={index+1}>{modulo.nome}</a></li>
                      )
                  }
                })}
                </ul>
              </li>
            </ul>
          </nav>
          <Topicos />
        </div>
    )
}
export default ListaAulas