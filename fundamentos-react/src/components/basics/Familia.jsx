import React from "react";
import FamiliaMembro from "./FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return (
        <div>
            <FamiliaMembro nome="Paulo" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Rita" {...props}/>
            <FamiliaMembro nome="Julia" sobrenome="Paulo"/>
        </div>
    )
}