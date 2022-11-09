import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section>
      <h1>Não autorizado</h1>
      <br />
      <p>Você não tem acesso à página requisitada.</p>
      <button onClick={goBack}>Voltar</button>
    </section>
  );
};

export default Unauthorized;
