import React from "react"; 

export default function ComParametro(props) {
    const status = props.nota >= 7 ? "aprovado" : "reprovado"; 
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p><strong>{props.aluno}</strong> tem nota <strong>{props.nota} e está {status}</strong></p>
        </div>
    ); 
}
