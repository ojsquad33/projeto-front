import "./style/style.css";
import React, { useState } from "react";
import BarraProgresso from "../BarraProgresso";

const Topicos = () => {
    const [count, setCount] = useState(0)
    return(
        <div className="topicos">
        <ul className="topicos">
            <BarraProgresso bgcolor={"lightgreen"} completed={count} />
            <li><label id="label-concluir"><input type="checkbox" id="concluir" onClick={() => 
            {if (count == 0){
                setCount(25)
            }
            else if (count == 25) {
                setCount(count - 25)
            }
            }}/>Introdução</label></li>
            <li><label id="label-concluir"><input type="checkbox" id="concluir" onClick={() => 
            {if (count == 25){
                setCount(50)
            }
            else if (count == 50) {
                setCount(count - 25)
            }
            }}/>Instalação</label></li>
            <li><label id="label-concluir"><input type="checkbox" id="concluir" onClick={() => 
            {if (count == 50){
                setCount(75)
            }
            else if (count == 75) {
                setCount(count - 25)
            }
            }}/>Exercícios</label></li>
            <li><label id="label-concluir"><input type="checkbox" id="concluir" onClick={() => 
            {if (count == 75){
                setCount(100)
            }
            else if (count == 100) {
                setCount(count - 25)
            }
            }}/>Conclusão</label></li>
        </ul>
    </div>
    )
}
export default Topicos