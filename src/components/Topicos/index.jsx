import "./style/style.css";
import React, { useState } from "react";
import BarraProgresso from "../BarraProgresso";
import cursos from "../../services/database_cursos";
import { useParams } from "react-router-dom";

const Topicos = () => {
    const [count, setCount] = useState(0)
    let { curso_id } = useParams()
    let curso = cursos.find((curso) => curso.id === Number(curso_id))
    return(
        <div className="topicos">
        <ul className="topicos">
            <BarraProgresso bgcolor={"lightgreen"} completed={count} />
            {
                cursos[curso.id - 1].aulas.map((aula, index) => {
                    return(
                        <li key={index}><label id="label-subtopicos"><input name={index} type="checkbox" id="subtopicos" 
                        onClick={() => 
                        {
                        const tamSubtopicos = document.querySelectorAll('#subtopicos')
                        var cresc = parseInt(100/(tamSubtopicos.length))
                        if (document.getElementsByName(`${index}`)[0].checked == true){
                            setCount(count + cresc)
                        }
                        else if (document.getElementsByName(`${index}`)[0].checked == false){
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