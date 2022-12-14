import React from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getNamesCountries, namesZero} from "../../actions"; 
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import style from "./CreateActivity.module.css"


//                                    VALIDACION DE ERRORES 
function validate(input){
    let errores ={};
    if(!input.name){ 
        errores.name ="Se requiere un Nombre"
    }
    else if(input.name.length < 3){
        errores.name = "El Nombre debe contener almenos 3 letras"
    }
    else if(/^\s+$/.test(input.name)){
        errores.name = "El Nombre No puede ser un espacio en blanco"
    }
    else if( !/^[a-zA-Z ]*$/.test(input.name)){
        errores.name ="El Nombre solo debe contener letras"
    }
    else if(input.difficulty < 1 || input.difficulty > 5 ){ 
        errores.difficulty = "La Dificultad debe ser un valor de 1 a 5"
    }
    else if( !/^[0-9]+$/.test(input.difficulty)){ 
        errores.difficulty= "Debe ser un numero positivo"  
    }
    else if(input.difficulty.toString()[0] === "0") { 
        errores.difficulty = "No puede comenzar con un 0"
    }
    else if( !/^[0-9]+$/.test(input.duration)){ 
        errores.duration = "Debe ser un numero"  
    }
    else if(input.duration < 1) { 
        errores.duration = "Debe ser un numero positivo"  
    }
    else if(input.duration.toString()[0] === "0") { 
        errores.duration = "No puede comenzar con un 0"
    }
    else if( input.duration % 1 !== 0){ //comprobar decimales 
        errores.duration = "Debe ser un numero entero"
    }
    else if( input.duration > 12){
        errores.duration = "La Actividad no puede ser mayor a 12 Horas"
    }
    
    return errores 
}



export default function CreateActivity(){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const names = useSelector((state) => state.names);
  const [errors, setErrors] = useState({}); // manejo de errores


  const [input, SetInput] =useState({
    name :"",
    difficulty:null,
    duration:null,
    season: "",
    countries :[]
  })
  
//                        INPUTS
  
  function handleChange(e){
     SetInput({
         ...input, 
         [e.target.name]: e.target.value 
     })
     setErrors(validate({ 
        ...input,
        [e.target.name]: e.target.value
     }));
   }
 
 //                       CHECK  

   function handleCheck(e){
  if(e.target.checked && input.season === ""){
        e.target.checked =true
        SetInput({
        ...input,
        season: e.target.value
        })
    }else{
        e.target.checked = false
    }  
                                 
   }
   
//                       SELECCIONAR CONTINENTE


   function handleSelect(e){
    if(input.countries.includes(e.target.value)){ 
        return 
    }else{
     SetInput({
         ...input,
         countries: [...input.countries, e.target.value] 
     });
    }
    }

//                       SUBMIT

   function hundleSubmit(e){
    e.preventDefault();
    dispatch(postActivity(input))
    alert ("Actividad Creada!!")

    SetInput({ 
        name :"",
        difficulty:null,
        duration:null,
        season: "",
        countries :[]
    });
    history.push("/home") // para redirigir 
   }

//                        ELIMINAR COUNTRIES


   function handleDelete(el){
    SetInput({
        ...input,
        countries: input.countries.filter(name => name !== el) 
    });
   }

//                         COMPROBACION INPUT

   function comprobacionInput(input){
    if(input.name && input.difficulty && 
        input.duration && input.season && input.countries.length > 0){
        return true
    }else{
        return false
    }
   }

  useEffect(()=>{
    dispatch(getNamesCountries())
    return ( )=>{
        dispatch(namesZero())
    }
  },[]);


  return(
    <div className={style.bod}>
        {console.log(input)}
        {console.log("errors:",errors)}
        <Link to="/home"><button className={style.btn}>Volver</button></Link>
         <h1 className={style.titulo}>Creacion de Actividades</h1>
         <form onSubmit={(e)=>hundleSubmit(e)}>
            <div>
                <p>Nombre:</p>
                {errors.name && ( // ERROR 
                    <p className={style.error}>{errors.name}</p>
                )}
                <input
                type="text"
                className={style.field}
                placeholder = "Nombre de la Actividad"
                value={input.name}  
                name="name"
                onChange={(e)=>handleChange(e)} 
                />
            </div>
            <div>
                <p>Dificultad: </p>
                {errors.difficulty && ( // ERROR
                 <p className={style.error}>{errors.difficulty}</p>
             )}
                <input
                type="number"
                placeholder="Debe ser de 1 a 5"
                className={style.field}
                value={input.difficulty}
                name= "difficulty"
                onChange={ (e)=>handleChange(e)}
                />
            </div>
            <div>
                <p>Duracion por Hora: </p>
                {errors.duration && ( // ERROR
                   <p className={style.error}>{errors.duration}</p>
               )}
                <input
                type="number"
                placeholder="Debe ser menor a 12 horas"
                className={style.field}
                value={input.duration}
                name= "duration"
                onChange={ (e)=>handleChange(e)}
                />
            </div>
            <div>
                <label>Temporada: <br></br> </label>
                {!input.season && ( // ERROR
                    <p className={style.error}>{ "Debe contener una Temporada"}</p>
                 )}     
                <label className={style.label}>Primavera:
                <input
                type="radio"
                value="primavera"
                name="primavera"
                onChange={(e)=>handleCheck(e)}
                />  
                </label>
                <label className={style.label} >Verano:
                <input
                type="radio"
                value="verano"
                name="verano"
                onChange={(e)=>handleCheck(e)}
                />    
                </label>
                <label className={style.label}>Oto??o:
                <input
                type="radio"
                value="oto??o"
                name="oto??o"
                onChange={(e)=>handleCheck(e)}
                />    
                </label>
                <label className={style.label}>Invierno:
                <input
                type="radio"
                value="invierno"
                name="invierno"
                onChange={(e)=>handleCheck(e)}
                />  
                </label>
            </div>
            <div>
                {input.countries.length === 0 &&( // ERROR
                        <p className={style.error}>{"Debe contener almenos un Pais"}</p>
                    )}
            <select onChange={e =>handleSelect(e)}
            >
            <option selected disabled>Eligir Pais</option>
               { names && names.map(nam =>(
                <option key={nam.name} value={nam.name}>{nam.name}</option>
               ))} 
            </select>
           
            </div>

                                          {/* BUTTON SUBMIT */} 


            {(Object.keys(errors).length === 0) && comprobacionInput(input) ? (
                <button className={style.submit} type="submit" onClick={(e)=>hundleSubmit(e)}>Crear Actividad</button>

            ): <p className={style.todosCampos}>Debes rellenar todos los campos para poder Crear tu actividad</p>}           
            
            
            </form>

            {(input.countries.length > 0) && ( // PAISES A??ADIDOS
                    <h2 className={style.countriesTitulo}>Paises a??adidos</h2>
                )}


            <div className={style.paises}>
            {input.countries.map(el => 
                <div key={el} className={style.divName}>
                    <p>{el}</p>
                    <button className={style.btnX} onClick={()=>handleDelete(el)}>X</button>
                </div>)}                 
            </div>

          
    </div>
  )
  
}
