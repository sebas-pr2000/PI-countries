import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getCountries,  getActivity} from "../../actions";
import Cards from "../Cards/Cards"
import Paginado from "../Paginado/Paginado"
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import style from "./Home.module.css"


export default function Home (){
    const dispatch = useDispatch() 
    const allCountries = useSelector((state)=> state.countries) 
  


                             //PAGINADO

     const [currentPage, setCurrentPage] = useState(1) // PAGINA ACTUAL 

     const [countriesPerPage, setCountriesPerPage] = useState(9) // PAISES POR PAG 
     
     const indexOfLastCountry = currentPage * countriesPerPage; // ULTIMO PAIS
     const indexOffirstCountry = indexOfLastCountry - countriesPerPage // PRIMER PAIS
     const currentCountries = allCountries.slice(indexOffirstCountry, indexOfLastCountry)   
                                                                       
     const paginado = (pageNumber) =>{
        if(pageNumber === 1){
            setCountriesPerPage(9)
            setCurrentPage(pageNumber)
        }else{
            setCountriesPerPage(10)
            setCurrentPage(pageNumber)
        }
        }
        

        
    //FIN PAGINADO


    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getActivity())
        paginado(1)
    },[]) 

    return(
        <div className={style.home}>
            <NavBar paginado={paginado}/>
            <div>
            <SearchBar/>
             <Paginado 
             countriesPerPage={countriesPerPage}
             allCountries={allCountries.length} 
             paginado={paginado} 
             />
             {allCountries.length > 0  && currentCountries ? (
                <Cards currentCountries={currentCountries}/>
             ):<p className={style.eve}>EL PAIS QUE BUSCASTE NO FUE ENCONTRADO</p>}
            </div>
        </div>
    )
}
