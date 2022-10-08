import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const aleatorio = Math.floor(Math.random() * props.max) + props.min;
    return (
        <>
            <h3>Aleatório</h3>
            <p>Valor minimo: {props.min}</p>
            <p>Valor máximo: {props.max}</p>
            <p><strong>Valor aleatório: {aleatorio}</strong></p>
        </>
    );
}
