const express= require('express')
const { check,validationResult } = require('express-validator')

const Speciality = require('../models/Speciality')

const router = express.Router()


//http://localhost:400/api/speciality  * post speciality

router.post('/',[
    check ('speciality','speciality is required').not().isEmpty()
],
async(req,res)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){return res.status(400).send(error.array())}
     
    const { speciality }=req.body
    try {
          const newSpeciality = new Speciality ({
           speciality
          })

          await  newSpeciality.save()
          res.send(newSpeciality)

    } catch (error) {
        
        res.status(500).send([{msg:'ereeeur'}])
    }
      
})


module.exports=router