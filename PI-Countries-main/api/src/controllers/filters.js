const {Country, Activity} = require("../db");


const Az = async () =>{
    try {
    const ordenamientoAz = await Country.findAll({
        order: [["name", "ASC"]],
        include: [Activity]
    })
    return(ordenamientoAz);

    } catch (error) {
    console.log(error);    
    }
};


const Za = async () =>{
 try {
    const ordenamientoZa = await Country.findAll({
        order:[["name", "DESC"]],
        include: [Activity]
    });
    return ordenamientoZa;

 } catch (error) {
    console.log(error);
 }
}

const minPopulation = async () =>{
    try{
        const ordenaminetoMin = await Country.findAll({
            order:[["population", "ASC"]], 
            include: [Activity]
        });
        return ordenaminetoMin;
    }catch(error){
        console.log(error);
    }
}


const maxPopulation = async () =>{
    try{
        const ordenaminetoMax = await Country.findAll({
            order:[["population", "DESC"]], 
            include: [Activity]
        });
        return ordenaminetoMax;
    }catch(error){
        console.log(error);
    }
}


module.exports = {
  Az,
  Za,
  minPopulation,
  maxPopulation
}