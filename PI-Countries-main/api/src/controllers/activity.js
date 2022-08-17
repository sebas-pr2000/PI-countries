const { Country, Activity } = require('../db.js');

const createActivity = async (name, difficulty, duration, season, countries)=>{

   try {// para poder verla en sql SELECT * FROM activities;
     let activity = await Activity.create({ 
         name, 
         difficulty,
         duration,
         season
      });
    
      let searchCountry = await Country.findAll({ // buscamos el pais que pertenece la activitidad,para relacionarla
         where:{
            name: countries
         }
      });

      return activity.addCountry(searchCountry)


   } catch (error) {
      console.log(`Error createActivity ${error} `)
   }
   
}

const getActivity = async ()=>{

   try {
      const activities = await Activity.findAll({
         include: [Country]
      });
      return activities;

   } catch (error) {
      console.log(error)
   }

}

module.exports = {
    createActivity,
    getActivity
}