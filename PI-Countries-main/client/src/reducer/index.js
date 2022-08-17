import { GET_COUNTRIES, FILTER_BY_CONTINENT, ORDEN_NAME_ASC, ORDEN_NAME_DESC, ORDEN_POPULATION_ASC, ORDEN_POPULATION_DESC, GET_ACTIVITY, FILTER_ACTIVITY, GET_NAME_COUNTRY, POST_ACTIVITY, GET_NAMES_COUNTRIES, GET_DETAIL  } from "../actions";

const initialState = {
    countries : [],
    allCountries : [], // siempre tendra los paises en orden de la api
    activitys: [],
    names: [],
    detail: []

}


function rootReducer (state = initialState, action ){
 switch(action.type){
    case GET_COUNTRIES:
        return{
            ...state,
            countries: action.payload,
            allCountries: action.payload 
        }

    case FILTER_BY_CONTINENT:
        const allCountries = state.allCountries;
        const continentFilter = action.payload === "All" ? allCountries : allCountries.filter(el => el.continent.includes(action.payload)); // para america
        return{
            ...state,
            countries : continentFilter 
        }
    
    case ORDEN_NAME_ASC:
        return{
            ...state,
            countries: action.payload,
            allCountries: action.payload
        }
 
    case ORDEN_NAME_DESC:
        return{
            ...state,
            countries: action.payload,
            allCountries: action.payload
        }    

    
    case ORDEN_POPULATION_ASC:
        return {
            ...state,
            countries: action.payload,
            allCountries: action.payload
        }    

          
    case ORDEN_POPULATION_DESC:
        return {
            ...state,
            countries: action.payload,
            allCountries: action.payload
        }    

    case GET_ACTIVITY:
        return{
            ...state,
            activitys: action.payload
        }

  //
    case FILTER_ACTIVITY:
        const allCountry = state.allCountries; // estan todos lo paises
        const allActivy = state.activitys;
        const cont = allActivy.find(el => el.ID === action.payload )
        const countryActivity = action.payload === "All" ? allCountry : cont.countries
        return{
            ...state,
            countries: countryActivity 
        }

        // SEARCH BAR

    case GET_NAME_COUNTRY:
         return{
            ...state,
            countries: action.payload
         }


       //POST - NAMES
    
    case GET_NAMES_COUNTRIES :
        return {
            ...state,
            names : action.payload
        }   



    case POST_ACTIVITY:
        return{
            ...state
        }     
  
     //DETAIL
     
    case GET_DETAIL :    
        return {
            ...state,
            detail: action.payload
        }



        default:
            return state;
    }
}

export default rootReducer;