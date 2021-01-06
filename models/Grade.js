const mongoose=require('mongoose')


const GradesSchema= new mongoose.Schema ({
    grade:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('grades', GradesSchema)