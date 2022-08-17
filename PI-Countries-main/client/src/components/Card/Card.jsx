import React from "react";
import style from "./Card.module.css"

export default function Card({name, continent, image, ID}){

    return(
        <div className={style.Card}>
           
                <h1 className={style.hone}>{name}</h1>
                <h5>{ID}</h5>
                <img className={style.image}  src={image} alt="image not found" />
                <h3>{continent}</h3>
            
        </div>
    )
}