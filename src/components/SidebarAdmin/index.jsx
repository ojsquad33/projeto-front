import "./style/style.css"

function SidebarAdmin(){
    return(
        <nav>
            <label for="touch"><span>Trilhas</span></label>               
            <input type="checkbox" id="touch"/> 
            <ul class="slide">
                <li><a href="#">Lorem Ipsum</a></li> 
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
            </ul>
            <label for="touch"><span>Usuários</span></label>               
            <input type="checkbox" id="touch"/> 
            <ul class="slide">
                <li><a href="#">Lorem Ipsum</a></li> 
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
                <li><a href="#">Lorem Ipsum</a></li>
            </ul>
        </nav> 
    )
}

export default SidebarAdmin