const {Router} = require("express");
const {createActivity, getActivity} = require("../controllers/activity")

const router = Router();


router.get("/", async (req, res)=>{

    try {
        const activities = await getActivity()
        res.status(200).json(activities)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }

})

router.post("/",async (req, res) => {
    const{name, difficulty, duration, season, countries} = req.body;

    if(!name || !difficulty || !duration || ! season || ! countries){
       res.send(404).send("faltan enviar datos para la creacion")
    }

       try {
           const create = await createActivity(name, difficulty, duration, season, countries)
           res.status(201).json({create})

       } catch (error) {
        res.status(404).send("Error en alguno de los datos provistos" + error)    
       }
    
    })



module.exports = router