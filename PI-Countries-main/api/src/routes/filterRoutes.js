const {Router} = require("express");
const {Az, Za} = require("../controllers/filters")
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



module.exports = router;