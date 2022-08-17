import React from "react";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../actions";

import style from "./SearchBar.module.css"


export default function SearchBAr (){
    const dispatch = useDispatch();

    const [name, SetName] = useState(""); 


   function handleInputChange(e){ 
    e.preventDefault()
    SetName(e.target.value)
    console.log(name)
   }
   
   function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCountry(name))
    SetName("")
   }
   

    return(
        <div className={style.divv}>
          {console.log(name)}
          <div className={style.buscar}>
            <input
            value={name}
            type= "text"
            placeholder = "Buscar Pais"
            onChange={((e )=> handleInputChange(e) ) }
            
              
            />
            <div className={style.btn}>
              <button  onClick={(e)=> handleSubmit(e)}   type="submit" outline="none">Buscar</button>
            </div>
           </div>
        </div>
    )
}