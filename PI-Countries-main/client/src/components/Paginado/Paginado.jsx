import React from "react";
import style from "./paginado.module.css"

export default function Paginado ({allCountries, paginado}){
    const pageNumbers = [];
    let paises =  Math.ceil((allCountries - 9  )/10) ;

    for(let i = 1; i <=  paises; i++ ){ 
            pageNumbers.push(i) 

    } 


    return (
        <nav className={style.paginacion}>
            <ul>
                {console.log("countries",paises, allCountries)}
                {pageNumbers && 
                pageNumbers.map(number =>(
                    <li key={number} >
                        <a  onClick={()=> paginado(number) }  className={style.ah} >{number}</a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}