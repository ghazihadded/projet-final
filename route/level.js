const express= require('express')
const { check,validationResult } = require('express-validator')

const Level= require ('../models/Level')

const router = express.Router()


// http://localhost:400/api/level * post level
 router.post('/',[
     check ('level','level is required').not().isEmpty()
 ],
 async(req,res)=>{
     const error= validationResult(req)
     if(!error.isEmpty()){return res.status(400).send(error.array())}
     
     const { level }=req.body
     try {
           const newLevel= new Level ({
              level
           })

           await newLevel.save()
           res.send(newLevel)

     } catch (error) {
        
         res.status(500).send([{msg:"server error"}])
     }
      
 })



module.exports=router