import "./style/style.css";
import Topicos from "../Topicos";
import trilhas from "../../services/database";

function ListaAulas(){
    var numAula = 0
    return(
        <div className="aulas">
          <nav>
            <ul>
              <li><a href="#">{trilhas[0].content[0].modulos[0].nome}</a>
                <ul>
                {trilhas[0].content[0].modulos.map((modulo, index) => {
                  return (
                    <li key={index}><a href="#">{modulo.nome}</a></li>
                    )
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