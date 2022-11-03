import "./style/style.css";

const Card = ({ trilha }) => {
  return (
    <div className="trilha">
      <img src={trilha.imagem} alt="Imagem da trilha." />
      <p>{trilha.trilha}</p>
    </div>
  );
};

export default Card;
