const express= require('express')
const router = express.Router()
const { check,validationResult } = require('express-validator')

const Situation= require ('../models/Situation')



// http://localhost:400/api/situation * post situation
 router.post('/',[
     check ('situation','situation is required').not().isEmpty()
 ],
 async(req,res)=>{
     const error= validationResult(req)
     if(!error.isEmpty()){return res.status(400).send(error.array())}
     
     const { situation }=req.body
     try {
           const newsituation= new Situation ({
              situation
           })

           await newsituation.save()
           res.send(newsituation)

     } catch (error) {
        
         res.status(500).send([{msg:'ereeeeur'}])
     }
      
 })



module.exports=router