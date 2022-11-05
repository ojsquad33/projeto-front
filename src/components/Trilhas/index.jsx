import "./style/style.css";
import trilhas from "../../services/database";
import Seguinte from "../../assets/next.svg";
import Anterior from "../../assets/prev.svg";
import Card from "../Card";

const Trilhas = () => {
  return (
    <div className="trilhas">
      <img
        className="seta"
        src={Anterior}
        alt="Seta apontando para a esquerda"
      />
      <div className="card-collection">
        {trilhas.map((trilha, index) => {
          return <Card key={index} trilha={trilha} />;
        })}
      </div>
      <img
        className="seta"
        src={Seguinte}
        alt="Seta apontando para a direita"
      />
    </div>
  );
};

export default Trilhas;
