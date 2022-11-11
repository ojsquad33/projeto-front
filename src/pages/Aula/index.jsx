import "./style.css";
import Conteudo from "../../components/Conteudo";
import ListaAulas from "../../components/ListaAulas";

function Aula() {
  return (
    <div className="container-aula">
      <Conteudo />
      <ListaAulas />
    </div>
  );
}
export default Aula;
