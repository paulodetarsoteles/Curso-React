import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basics/Primeiro'

const tag = <strong>OLÁ REACT!!!</strong>

ReactDOM.render(
    <div>
        { tag } 
        <br/>
        <hr/>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
)
