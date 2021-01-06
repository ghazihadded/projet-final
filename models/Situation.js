const mongoose=require('mongoose')


const SituationSchema= new mongoose.Schema ({
    situation:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('situation', SituationSchema)