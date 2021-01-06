const express= require('express')
const router = express.Router()

const { check,validationResult } = require('express-validator')

const Ville= require ('../models/Ville')




// http://localhost:4000/api/ville * post level
 router.post('/',[
     check ('ville','ville is required').not().isEmpty()
 ],
 async(req,res)=>{
     const error= validationResult(req)
     if(!error.isEmpty()){return res.status(400).send(error.array())}
     
     const { ville }=req.body
     try {
           const newVille= new Ville ({
              ville
           })

           await newVille.save()
           res.send(newVille)

     } catch (error) {
        
         res.status(500).send([{msg:'error'}])
     }
      
 })



module.exports=router