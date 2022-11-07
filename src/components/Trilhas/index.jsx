import "./style/style.css";
import trilhas from "../../services/database";
import Seguinte from "../../assets/next.svg";
import Anterior from "../../assets/prev.svg";
import Card from "../Card";
import { useState } from "react";

const Trilhas = ({ setTrilhaAtual, setCliqueAtivo }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const length = trilhas.length;

  const manipularSetaEsquerda = () => {
    setCurrentPage(currentPage === 0 ? length - 1 : currentPage - 1);
  };
  const manipularSetaDireita = () => {
    setCurrentPage(currentPage === length - 1 ? 0 : currentPage + 1);
  };

  return (
    <div className="trilhas">
      {length > 1 && (
        <img
          className="seta"
          src={Anterior}
          alt="Seta apontando para a esquerda"
          onClick={manipularSetaEsquerda}
        />
      )}
      <div className="card-collection">
        {trilhas[currentPage].content.map((trilha, index) => {
          return (
            <Card
              key={index}
              trilha={trilha}
              setCliqueAtivo={setCliqueAtivo}
              setTrilhaAtual={setTrilhaAtual}
            />
          );
        })}
      </div>
      {length > 1 && (
        <img
          className="seta"
          src={Seguinte}
          alt="Seta apontando para a direita"
          onClick={manipularSetaDireita}
        />
      )}
    </div>
  );
};

export default Trilhas;
