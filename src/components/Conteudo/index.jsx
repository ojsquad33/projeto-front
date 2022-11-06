import "./style/style.css";

function Conteudo(){
    return(
        <div className="conteudo">
        <nav>
          <ul>
            <li><a href="#">Full Stack</a>
              <ul>
                <li><a href="#">Front End</a></li>
                <li><a href="#">Back End</a></li>
                <li><a href="#">UI/UX</a></li>
              </ul>
            </li>
          </ul>
        </nav>
            <iframe className="conteudo" width="auto" height="auto" src="https://www.youtube.com/embed/oPmhE_EmLjk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default Conteudo