import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, ordenNameAsc, ordenNameDesc, ordenPopulationAsc, ordenPopulationDesc, filterCountryByContinent, FilterActivity} from "../../actions";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar({paginado}){




const dispatch = useDispatch();   
const allActivitys = useSelector((state) => state.activitys) 


//                   ORDENAR POR POBLACION

function handleOrdenPopulation(e){
      paginado(1)
    if(e.target.value === "asc-pob"){
        dispatch(ordenPopulationAsc())
    }else if(e.target.value === "desc-pob"){
        dispatch(ordenPopulationDesc())
    }else{
        dispatch(getCountries());
    }
}

//                   ORDENAR POR NOMBRE


function handleOrdenName(e){
       paginado(1)
    if(e.target.value === "asc-name"){
         dispatch(ordenNameAsc())
    }else if(e.target.value === "desc-name"){
        dispatch(ordenNameDesc())
    }else{
        dispatch(getCountries());
        }
    }

 //                  FILTRAR POR CONTINENTE 
 
 function handleFilterContinent(e){ // obtenemos el evento y lo usamos que seria el value que hace referencia a cada una de las opciones
    dispatch(filterCountryByContinent(e.target.value))
    paginado(1)
}



//                   FILTRAR POR ACTIVIDADES 

function handleFilterActivity(e){
    dispatch(FilterActivity(e.target.value))
    paginado(1)
}


//                    RECARGAR PAISES 

 function handleClick(e){
     e.preventDefault();
    dispatch(getCountries())
 }



return(
    <div className={style.navbar}>
        <header className={style.header}>
      <section>  
         <h1>COUNTRY APP</h1>
      </section>  
        <nav className={style.navMenu}>
    
       
                           {/**RECARGAR COUNTRIES BOTTOM */}

        <div className={style.recargar}>
           <button className={style.btn} onClick={e => {handleClick(e)}}>    
                Recargar Paises          
           </button>   
        </div>                  

        <div className={style.crearActividad}>
           <Link to = "/activity">
                      <button className={style.btn}>  Crear Activity</button>   
           </Link>
        </div>
       
        <div className={style.ordenamientoSeleccionar}>
            <div className={style.ordenamientoName}>
          <h3>Ordenar por Nombre</h3>
              
         <div className={style.select}>  
          <select  onChange={e =>{handleOrdenName(e)}} >
            <option value="not-name">No Ordenar</option>
            <option value="asc-name">Ascendete</option>
            <option value="desc-name">Descendete</option>
          </select>    
        </div>      
             </div>
       <div className="ordenamiento-poblacion">
         <h3>Ordenar por Poblacion </h3>
         <div className={style.select}>
          <select onChange={e => {handleOrdenPopulation(e)}}>
            <option value="not-pob">No Ordenar</option> 
            <option value="asc-pob">Ascendete</option>
            <option value="desc-pob">Descendete</option>
           </select>
         </div>
       </div>
       <div className="selecionar-continente">
         <h3>Selecionar Continente </h3>
       <div className={style.select}>
         <select onChange={e => handleFilterContinent(e)}> 
            <option value="All">Todos</option>
            <option value="America">America</option> 
            <option value= "Europe">Europa</option>
            <option value="Africa">Africa</option>
            <option value= "Oceania" >Oceania</option>
            <option value= "Asia" >Asia</option>
            <option value= "Antarctica" >Antarctica</option>
         </select> 
      </div>  
       </div>
       <div className="selecionar-actividad">
       <h3>Selecionar Actividad </h3>
       <div className={style.select}>
         <select onChange={e => handleFilterActivity(e)}> 
            <option value="All">ninguna</option>
             {allActivitys && allActivitys.map(acti => {
             return <option key={acti.ID} value={acti.ID}>{acti.name}</option>
            })}
         </select>
       </div>
      </div>    


      </div>
        </nav>
        </header>
    </div>
)
}