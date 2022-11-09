import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <h1>Não encontrado</h1>
      <br />
      <p>A página requisitada não foi encontrada.</p>
      <button onClick={goBack}>Voltar</button>
    </section>
  );
};

export default NotFound;
