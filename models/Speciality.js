const mongoose=require('mongoose')


const SpecialitySchema= new mongoose.Schema ({
     speciality:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('specialitys', SpecialitySchema)