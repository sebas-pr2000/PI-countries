import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import style from "./Cards.module.css"

export default  function Cards ({currentCountries}){

    return(
        <div className={style.cards}>
            {currentCountries && currentCountries.map(country =>{
                return(
                    <div key={country.ID}>
                    <Link to={"/home/" + country.ID}>
                    
                    <Card 
                    key={country.ID}
                    // ID={country.ID}
                    name={country.name}
                    continent={country.continent}
                    image={country.Image}/>
                    </Link>
              </div>
                )
            })}
        </div>
    )
}