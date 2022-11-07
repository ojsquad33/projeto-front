import "./style.scss";
import Trilhas from "../../components/Trilhas";
import ListaCurso from "../../components/ListaCurso";
import { useState } from "react";
import trilhas from "../../services/database";

function Home() {
  const [cliqueAtivo, setCliqueAtivo] = useState(false);
  const [trilhaAtual, setTrilhaAtual] = useState(trilhas[0]);
  return (
    <div className="page-home">
      <h1 className="escolher-trilha">Escolha a sua Trilha</h1>
      <Trilhas
        setTrilhaAtual={setTrilhaAtual}
        setCliqueAtivo={setCliqueAtivo}
      />
      {cliqueAtivo && (
        <ListaCurso
          trilhaAtual={trilhaAtual}
          cliqueAtivo={cliqueAtivo}
          setCliqueAtivo={setCliqueAtivo}
        />
      )}
    </div>
  );
}

export default Home;
