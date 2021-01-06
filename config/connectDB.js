const mongoose=require('mongoose')
const config= require ('config')

 const connect =()=>{

    mongoose.connect(config.get('mongoURI'),{ 
      useNewUrlParser: true ,useUnifiedTopology: true })
    .then(()=>console.log('server connect on db'))
    .catch(err=> console.log(err))
 }



 module.exports=connect