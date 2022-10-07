import React from "react"; 

import Primeiro from "./components/basics/Primeiro"; 
import ComParametro from "./components/basics/ComParametro"; 
import Fragmento from "./components/basics/Fragmento"; 
import Aleatorio from "./components/basics/Aleatorio"; 

const tag = <strong>OLÁ REACT!!!</strong>

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div id="app">
        {tag}
        <p>Fundamentos</p>
        <br />
        <hr />
        <Aleatorio min={1} max={10} />
        <Fragmento />
        <ComParametro titulo="Segundo Componente" aluno="Rita" nota={9.3} />
        <Primeiro></Primeiro>
    </div>
); 
