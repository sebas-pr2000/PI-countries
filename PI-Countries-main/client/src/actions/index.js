import axios from "axios";

export const GET_COUNTRIES =   "GET_COUNTRIES";
export const FILTER_BY_CONTINENT = "fILTER_BY_CONTINENT";
export const ORDEN_NAME_ASC = "ORDEN_NAME_ASC";
export const ORDEN_NAME_DESC = "ORDEN_NAME_DESC";
export const ORDEN_POPULATION_ASC = "ORDEN_POPULATION_ASC";
export const ORDEN_POPULATION_DESC = "ORDEN_POPULATION_DESC";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY";
export const GET_NAMES_COUNTRIES = "GET_NAMES_COUNTRIES "
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_DETAIL = "GET_DETAIL";

export function getCountries (){
    return async function (dispatch){
        try{
            var countries = await axios.get("http://localhost:3001/countries/");
            return dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}


export function filterCountryByContinent (payload){
    return{
        type: FILTER_BY_CONTINENT,
        payload: payload
    }
}


export function ordenNameAsc (){
    return async function (dispatch){
        try{
            var countriesAsc = await axios.get("http://localhost:3001/filter/AZ");
            return dispatch({
                type : ORDEN_NAME_ASC,
                payload: countriesAsc.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}


export function ordenNameDesc (){
    return async function (dispatch){
        try{
            var countriesDesc = await axios.get("http://localhost:3001/filter/ZA");
            return dispatch({
                type : ORDEN_NAME_DESC,
                payload: countriesDesc.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}


export function ordenPopulationAsc (){
    return async function (dispatch){
        try{
            var populationAsc = await axios.get("http://localhost:3001/filter/maxPopulation");
            return dispatch({
                type: ORDEN_POPULATION_ASC,
                payload: populationAsc.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}



export function ordenPopulationDesc (){
    return async function (dispatch){
        try{
            var populationDesc = await axios.get("http://localhost:3001/filter/minPopulation");
            return dispatch({
                type: ORDEN_POPULATION_DESC,
                payload: populationDesc.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}


export function getActivity (){
    return async function (dispatch){
        try{
            var getActivitys = await axios.get("http://localhost:3001/activity/");
            return dispatch({
                type: GET_ACTIVITY,
                payload: getActivitys.data
            })
  
        }catch(error){
            console.log(error)
        }
    }
}


export function FilterActivity(payload){
 return{
    type: FILTER_ACTIVITY ,
    payload: payload
 }
}

// SEARCH BAR

export function getNameCountry(name){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/countries/s/?name=${name}`)
            return dispatch({
                type: GET_NAME_COUNTRY,
                payload : json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
  

// POST ACTIVITY

export function getNamesCountries (){
  return async function (dispatch){
      try {
          var names = await axios.get("http://localhost:3001/countries/names")
          return dispatch({
            type: GET_NAMES_COUNTRIES,
            payload: names.data
          })
      } catch (error) {
          console.log(error)
      }
  }
  }


export function postActivity (payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/activity/", payload);
        return response;
    }
}



//  DETAIL


export function getDetail (id){
    return async function (dispatch){
        try{
            var details =  await axios.get(`http://localhost:3001/countries/s/${id}`)
            return dispatch({
                type : GET_DETAIL,
                payload: details.data
            })
        }catch(error){
            console.log(error)
        }
    }

}

