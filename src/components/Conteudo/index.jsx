import "./style.css";

function Conteudo({ urlVideo }) {
  return (
    <iframe
      className="conteudo-aula"
      src={urlVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
export default Conteudo;
