import "./style/style.css";
import Trilhas from "../../components/Trilhas";
import Header from "../../components/Header";

function Home() {
  return (
    <div className="page-home">
      <Header text="Trilhas Orange Evolution" />
      <h1 className="escolher-trilha">Escolha a sua Trilha</h1>
      <Trilhas />
    </div>
  );
}

export default Home;
