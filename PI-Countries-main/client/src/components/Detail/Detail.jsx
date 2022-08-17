import React from "react";
import { Link, useHistory} from "react-router-dom";
import { useDispatch,  useSelector} from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import style from "./Detail.module.css"


export default function Detail(props){

    const history = useHistory(); 
    const dispatch = useDispatch();


    function handleClick(){
        history.goBack()
    }

    useEffect(()=>{
        dispatch(getDetail(props.match.params.ID)) // traer el id de la url 
    },[])

const detCountry =  useSelector((state) => state.detail);

return(
    <div className={style.as}>
        {console.log(detCountry)}
        <Link to="/home">
            <button className={style.btn}>Volver</button>
        </Link>
        {/* <button onClick={()=>handleClick()} className={style.btn}>Volver</button> */}
        <div className={style.detaill}>
          {
            detCountry.length  > 0 ?
            <div className={style.detail}>
           <h4>ID: {detCountry[0].ID}</h4>
           <h1 className={style.titulo}>{detCountry[0].name}</h1>
           
        <div className={style.contenido}>
           <img className={style.Image} src={detCountry[0].Image} alt="image country" />
           <div className={style.contentDetail}>
             <h2>Capital: {detCountry[0].capital}</h2>
             <h2>Subregion: {detCountry[0].subregion}</h2>
             <h2>Continente: {detCountry[0].continent}</h2>
             <h2>Área: {detCountry[0].area} km2</h2>
             <h2>Poblacion: {detCountry[0].population} Personas</h2>
           </div>
        </div>  


           <h3 className={style.activity}>Actividades del pais</h3>
           {console.log("activid",detCountry[0].activities)}
           <div className={style.activityDiv}>

                            {/*ACTIVIDADES DEL PAIS */}
                            
           {detCountry[0].activities.length > 0 ? detCountry[0].activities.map(el => {return (
            <div className={style.activityDetail}>
                <h2>{el.name}</h2>
                <p>Dificultad : {el.difficulty}</p>
              {( el.duration === 1) ? <p>Duracion: {el.duration} Hora</p>: <p>Duracion: {el.duration} Horas</p> } 
                <p>Temporada: {el.season}</p>
            </div>
           )}):<div>
            <p className={style.noContiene}>Este pais no contiene Acitividades</p>
            </div> 
           }
           </div>
         </div> : (<p> Loanding... </p>)
           
        }

        </div>

    </div>

)
}

