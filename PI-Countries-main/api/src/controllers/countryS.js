const { Country, Activity } = require('../db.js');
const {Op} = require("sequelize")



const detailCountry = async(id) =>{

    try {
      const detail = await Country.findAll({
        where:{
          ID : id
        },
        include: [Activity]
      });
  
      return detail;
  
    } catch (error) {
      console.log(error);
    }
  }
    
  const countryName = async (name) =>{
  
    try {
      const country = await Country.findAll({
        where:{
          name: {
           [Op.iLike] : `%${name}%` // ilike para no comparar mayus y minus
          }
        },
        include : [Activity]
      }) ;
       return country;
  
    } catch (error) {
      console.log("country not found")
    }
  
  }
  
module.exports = {
    detailCountry,
    countryName
}  