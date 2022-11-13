import "./style.css";
import Topicos from "../Topicos";
// import cursos from "../../services/database_cursos";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

function ListaAulas() {
  let { curso_id } = useParams();
  const [cursos, setCursos] = useState([]);

  const getCurso = async () => {
    try {
      const { data } = await axios.get(`/cursos`, {
        withCredentials: true,
      });
      console.log(data);
      setCursos(data.content);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCurso();
  }, []);

  // let curso = cursos.find((curso) => curso.id === Number(curso_id));

  return (
    <div className="aulas">
      <nav>
        <ul>
          <li>
            <a className="aula-selecionada" href="#">
              {/* {cursos[curso.id - 1].nome} */}
            </a>
            <ul>
              {/* {cursos.map((modulo, index) => {
                var trilha = cursos[curso.id - 1].trilha_id;
                if (modulo.trilha_id === trilha && modulo.id !== curso.id) {
                  return (
                    <li key={index}>
                      <a href={index + 1}>{modulo.nome}</a>
                    </li>
                  );
                }
              })} */}
            </ul>
          </li>
        </ul>
      </nav>

      <Topicos />
      <Link to="/home" className="go-back">
        Voltar para o menu de trilhas →
      </Link>
    </div>
  );
}
export default ListaAulas;
