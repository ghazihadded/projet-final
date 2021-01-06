const mongoose=require('mongoose')


const LevelSchema= new mongoose.Schema ({
    level:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('levels', LevelSchema)