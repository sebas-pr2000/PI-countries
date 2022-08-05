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


module.exports = {
  Az,
  Za
}