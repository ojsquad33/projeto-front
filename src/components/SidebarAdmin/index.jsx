import "./style/style.css";
import React, { useState, createContext } from "react";

const opcaoContext = createContext()

function SidebarAdmin(){
    const [opcao, setOpcao] = useState("")
    return(
        <nav className="side-bar">
            <ul className="opcoes">
                <li><a id="trilha" href="#" onClick={() => {
                    setOpcao(document.getElementById("trilha").innerHTML)
                }
                }>Trilhas</a></li>
                <li><a id="cursos" href="#" onClick={() => {
                    setOpcao(document.getElementById("cursos").innerHTML)
                }
                }>Cursos</a></li>
                <li><a id="aulas" href="#" onClick={() => {
                    setOpcao(document.getElementById("aulas").innerHTML)
                }
                }>Aulas</a></li>
                <li><a id="usuarios" href="#" onClick={() => {
                    setOpcao(document.getElementById("usuarios").innerHTML)
                }
                }>Usuários</a></li>
            </ul>
        </nav> 
    )
}

export default SidebarAdmin