import "./style/style.css";
import React, { useState } from "react";
import BarraProgresso from "../BarraProgresso";

const Topicos = () => {
    const [count, setCount] = useState(0)
    return(
        <div className="topicos">
        <ul className="topicos">
            <BarraProgresso bgcolor={"lightgreen"} completed={count} />
            <li><label id="label-subtopicos"><input type="checkbox" id="subtopicos" 
            onClick={() => 
            {
            const tamSubtopicos = document.querySelectorAll('#subtopicos')
            var cresc = parseInt(100/(tamSubtopicos.length))
            if (count < cresc){
                setCount(count + cresc)
            }
            else{
                setCount(count - cresc)
            }
            }}/>Introdução</label></li>
            <li><label id="label-subtopicos"><input type="checkbox" id="subtopicos" 
            onClick={() => 
            {
            const tamSubtopicos = document.querySelectorAll('#subtopicos')
            var cresc = parseInt(100/(tamSubtopicos.length))
            if (count < cresc){
                setCount(count + cresc)
            }
            else{
                setCount(count - cresc)
            }
            }}/>Introdução</label></li>
            <li><label id="label-subtopicos"><input type="checkbox" id="subtopicos" 
            onClick={() => 
            {
            const tamSubtopicos = document.querySelectorAll('#subtopicos')
            var cresc = parseInt(100/(tamSubtopicos.length))
            if (count < cresc){
                setCount(count + cresc)
            }
            else{
                setCount(count - cresc)
            }
            }}/>Introdução</label></li>
            <li><label id="label-subtopicos"><input type="checkbox" id="subtopicos" 
            onClick={() => 
            {
            const tamSubtopicos = document.querySelectorAll('#subtopicos')
            var cresc = parseInt(100/(tamSubtopicos.length))
            if (count < cresc){
                setCount(count + cresc)
            }
            else{
                setCount(count - cresc)
            }
            }}/>Introdução</label></li>
        </ul>
    </div>
    )
}
export default Topicos