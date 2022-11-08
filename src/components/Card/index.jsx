import "./style/style.css";

const Card = ({ trilha, setCliqueAtivo, setTrilhaAtual }) => {
  const mostrarAulas = () => {
    setCliqueAtivo(true);
    setTrilhaAtual(trilha);
  };
  return (
    <div className="trilha" onClick={mostrarAulas}>
      <img src={trilha.imagem} alt="Imagem da trilha." />
      <p>{trilha.trilha}</p>
    </div>
  );
};

export default Card;
