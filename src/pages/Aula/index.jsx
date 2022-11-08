import "./style/style.css";
import Conteudo from "../../components/Conteudo";
import ListaAulas from "../../components/ListaAulas";

function Aula() {
  return (
    <div>
      <article>
        <Conteudo />
        <ListaAulas />
      </article>
    </div>
  );
}
export default Aula;
