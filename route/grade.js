const express= require('express')
const { check,validationResult } = require('express-validator')

const Grade= require ('../models/grade')

const router = express.Router()


//http://localhost:400/api/grade  *post grade
router.post('/',[
    check ('grade','grade is required').not().isEmpty()
],
async(req,res)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){return res.status(400).send(error.array())}
     
    const { grade }=req.body
    try {
          const newGrade= new Grade ({
            grade
          })

          await newGrade.save()
          res.send(newGrade)

    } catch (error) {
        
        res.status(500).send([{msg:'ereeeur'}])
    }
      
})



module.exports=router