const {Router} = require("express");
const{allCountries} = require("../controllers/country")
const router = Router();

router.get("/", async (req, res)=>{

    try {
        const countries = await allCountries();
            res.status(200).json(countries)   
        
    } catch (error) {
        res.status(404).json({eror: error.message})
    }
});



module.exports = router