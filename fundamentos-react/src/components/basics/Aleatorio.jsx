import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const aleatorio = Math.floor(Math.random() * props.max) + props.min;
    return (
        <>
            <p><strong> - Número Aleatório - </strong></p>
            <p>Valor minimo: {props.min}</p>
            <p>Valor máximo: {props.max}</p>
            <p>Valor minimo: {aleatorio}</p>
        </>
    );
}
