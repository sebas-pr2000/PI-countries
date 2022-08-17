import React from "react";
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css"


const LandinPage = () =>{
    return(
        <div className={style.backgro}>
            <h1 className={style.titulo}>WELLCOME COUNTRY APP</h1>
            <Link to="/home">
                <button className={style.btn}>Ingresar</button>
            </Link>
        </div>
    )
}

export default LandinPage