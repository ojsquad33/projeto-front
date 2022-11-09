import "./style.scss";
import Trilhas from "../../components/Trilhas";
import ListaCurso from "../../components/ListaCurso";
import { useState } from "react";
import trilhas from "../../services/database";

function Home() {
  const [cliqueAtivo, setCliqueAtivo] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [trilhaAtual, setTrilhaAtual] = useState(trilhas[0]);

  return (
    <div className="page-home">
      <h1 className="escolher-trilha">Escolha a sua Trilha</h1>
      <Trilhas
        setTrilhaAtual={setTrilhaAtual}
        setCliqueAtivo={setCliqueAtivo}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {cliqueAtivo && (
        <ListaCurso
          trilhaAtual={trilhaAtual}
          cliqueAtivo={cliqueAtivo}
          setCliqueAtivo={setCliqueAtivo}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Home;
