import "./style/style.css";
import Topicos from "../Topicos";

function ListaAulas(){
    return(
        <div className="aulas">
        <nav>
          <ul>
            <li><a href="#">Java</a>
              <ul>
                <li><a href="#">Python</a></li>
                <li><a href="#">C++</a></li>
                <li><a href="#">SQL</a></li>
              </ul>
            </li>
          </ul>
        </nav>
          <Topicos />
    </div>
    )
}
export default ListaAulas