const {Router} = require("express");
const {Az, Za, minPopulation, maxPopulation} = require("../controllers/filters")
const router = Router();

router.get("/AZ",async (req, res)=>{

    try {
        const orderAz = await Az(); 
        res.status(200).json(orderAz);
    } catch (error) {
        res.status(404).json({error: error.message});
    }

});

router.get("/ZA", async (req, res)=>{
 try {
    const orderZa = await Za();
    res.status(200).json(orderZa);
 } catch (error) {
    res.status(404).json({error : error.message});
 }
});


router.get("/minPopulation", async (req, res)=>{
    try {
       const orderMin = await minPopulation();
       res.status(200).json(orderMin);
    } catch (error) {
       res.status(404).json({error : error.message});
    }
});


router.get("/maxPopulation", async (req, res)=>{
    try {
       const orderMax = await maxPopulation();
       res.status(200).json(orderMax);
    } catch (error) {
       res.status(404).json({error : error.message});
    }
   });



module.exports = router;