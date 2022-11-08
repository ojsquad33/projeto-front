import './style/style.css';
import Conteudo from '../../components/Conteudo';
import ListaAulas from '../../components/ListaAulas';
import Header from '../../components/Header';

function Aula() {
  return (
    <div>
      <Header text="exemplo"/>
      <article>
            <Conteudo />
            <ListaAulas />
        </article>
    </div>
  );
}
export default Aula;
