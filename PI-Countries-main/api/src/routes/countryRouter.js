const {Router} = require("express");
const{allCountries, detailCountry, countryName} = require("../controllers/country")
const router = Router();

router.get("/?", async (req , res)=>{
  const {name } = req.query;

  try {
  const country = await countryName(name);
  res.status(200).json(country)    
    
  } catch (error) {
    res.status(404).json({error: error.message})
  }
 
})


router.get("/", async (req, res)=>{

    try {
        const countries = await allCountries();
            res.status(200).json(countries)   
        
    } catch (error) {
        res.status(404).json({eror: error.message})
    }
});



router.get("/:id", async (req, res)=>{
  const {id} = req.params;

  try {
      const detail = await detailCountry(id)
      res.status(200).json(detail)
    
  } catch (error) {
    res.status(404).json({error: error.message})
  }
});



module.exports = router