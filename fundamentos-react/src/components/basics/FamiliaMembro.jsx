import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div id="familiaMembro">
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}
