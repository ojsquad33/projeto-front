import Accordion from "../Accordion";
import Card from "../Card";
import "./style/style.css";

const ListaCurso = ({ trilhaAtual, cliqueAtivo, setCliqueAtivo }) => {
  const fecharAulas = () => {
    setCliqueAtivo(false);
  };
  const aux = trilhaAtual;

  return (
    <div className="lista-curso">
      <div className="wrap-description">
        <Card
          key={1}
          trilha={trilhaAtual}
          cliqueAtivo={cliqueAtivo}
          setCliqueAtivo={setCliqueAtivo}
          trilhaAtual={trilhaAtual}
        />
        <h1 className="close" onClick={fecharAulas}>
          fechar X
        </h1>
        <p className="description">
          Se você chegou até aqui, é porque quer aprender mais sobre tecnologia,
          especialmente sobre {aux.trilha}! <br />
          <br />O Orange Evolution consiste em trilhas totalmente gratuitas para
          que você possa iniciar a sua carreira na tecnologia. Você terá acesso
          a vídeos, lives, artigos, apostilas e até cursos gratuitos, além
          desses conteúdos serem da Orange Juice, de parceiros e empresas que
          confiamos. <br />
          <br />
          Essa trilha foi montada pensando em quem está começando na área, ou
          passando por uma migração de carreira e ainda não sabe exatamente o
          que é esse mundo. Então, aperta o cinto e vem com a gente nessa
          jornada!
        </p>
      </div>
      <div className="wrapper">
        {aux.modulos.map((modulo, index) => (
          <Accordion key={index} title={modulo.nome} content={modulo.aulas} />
        ))}
      </div>
    </div>
  );
};

export default ListaCurso;
