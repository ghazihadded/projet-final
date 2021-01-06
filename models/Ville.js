const mongoose=require('mongoose')


const villeSchema= new mongoose.Schema ({
    ville:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('ville', villeSchema)