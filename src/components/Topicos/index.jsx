import "./style/style.css";
import React, { useState } from "react";
import BarraProgresso from "../BarraProgresso";
import trilhas from "../../services/database";

const Topicos = () => {
    const [count, setCount] = useState(0)
    return(
        <div className="topicos">
        <ul className="topicos">
            <BarraProgresso bgcolor={"lightgreen"} completed={count} />
            {
                trilhas[0].content[0].modulos[0].aulas.map((aula, index) => {
                    return(
                        <li key={index}><label id="label-subtopicos"><input type="checkbox" id="subtopicos" 
                        onClick={() => 
                        {
                        const tamSubtopicos = document.querySelectorAll('#subtopicos')
                        var cresc = parseInt(100/(tamSubtopicos.length))
                        if (count < 100){
                            setCount(count + cresc)
                        }
                        else {
                            setCount(count - cresc)
                        }
                        }}/> {aula}
                        </label></li>
                    )
                })
            }
        </ul>
    </div>
    )
}
export default Topicos