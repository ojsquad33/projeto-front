import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ trilhaAtual, modulo, paginaAtual }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="trilha-info">
          <Link
            to={{
              pathname: `/aula/${paginaAtual + 1}/${trilhaAtual.id}/${
                modulo.id
              }`,
            }}
          >
            Acessar
          </Link>
          {modulo.nome}
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
          {modulo.aulas &&
            modulo.aulas.map((aula, index) => {
              return <li key={index}>{aula}</li>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
