const {Router} = require("express");
const{allCountries, allNamesCountries} = require("../controllers/country")
const router = Router();



router.get("/", async (req, res)=>{

    try {
        const countries = await allCountries();
        console.log("se pidio countries")
            res.status(200).json(countries)   
        
    } catch (error) {
        res.status(404).json({eror: error.message})
    }
});

router.get("/names", async (req, res)=>{

    try {
        const countriesNames = await allNamesCountries();
            res.status(200).json(countriesNames)  
        
    } catch (error) {
        res.status(404).json({eror: error.message})
    }
});



  
  
module.exports = router