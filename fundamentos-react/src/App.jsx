import "./App.css"; 

import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from "./components/basics/Fragmento";
import ComParametro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/Primeiro";

const tag = <h2><strong>BEM VINDO REACT!!!</strong></h2>

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        {tag}
        <h3>Fundamentos</h3>
        <hr />
        <div className="Cards">
            <Card titulo="Desafio Aleatório" color="#196F3D">
                <Aleatorio min={1} max={10} />
            </Card>
            <Card titulo="Fragmento" color="#7C2159">
                <Fragmento />
            </Card>
            <Card titulo="Segundo Exercicio" color="#B03A2E">
                <ComParametro titulo="Segundo Componente" aluno="Rita" nota={9.3} />
            </Card>
            <Card titulo="Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
); 
