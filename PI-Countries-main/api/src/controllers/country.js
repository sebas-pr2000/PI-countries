const { Country, Activity } = require('../db.js');
const  axios = require("axios");


// SET client_encoding ='UTF8'; codigo error bytes


const allCountries = async ()=>{
    // primero debo trar los paises con la informacion requerida de la api   -- Listo
    // crear por cada una un nuevo pais en la base de datos con el CREATE    -- listo
    // retornar todos los paises  FIND ALL 
    
  // llamar paises de la API externa y mandarla a la BD
try {
  const countries = await Country.findAll();

  if(countries.length === 0){

    await axios.get('https://restcountries.com/v3/all')
   .then(response =>(response.data.forEach(e => Country.create({ 
     ID : e.cca3 ,
     name: e.name.common,
     Image : e.flags[1] || "image country",
     continent: e.continents[0] ,
     capital: e.capital ? e.capital[0] : "not capital",
     subregion: e.subregion, 
     area: e.area , 
     population: e.population  
   })
   ))) 

   return (countries);
 
  }else{
    return(countries);
  }

} catch (error) {
  console.log(error);
}
}


const allNamesCountries = async () =>{
  try {
    const countriesName = await Country.findAll({
      attributes: ["name"],
      order: [["name", "ASC"]]
    })
    return countriesName;
    
  } catch (error) {
    console.log(error);
  }
}
  


// 
module.exports = {
    allCountries,
    allNamesCountries
}

// recordar que se puede hacer "||" para que un elemento tenga un valor por default