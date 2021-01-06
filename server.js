const express= require('express')
const connect =require('./config/connectDB')

const app =express()
connect()

const port = process.env.PORT || 4000

app.use(express.json())

app.use('/api/level',require('./route/level'))
app.use('/api/grade',require('./route/grade'))
app.use('/api/speciality',require('./route/speciality'))
app.use('/api/ville',require('./route/ville'))
app.use('/api/situation',require('./route/situation'))
app.use('/api/admin',require('./route/administrateur'))
app.use('/api/prof',require('./route/ensaignant'))
app.use('/api/prof',require('./route/loginEnsaignant'))
app.use('/api/post',require('./route/posts'))


app.listen(port,()=>{
    console.log(`Listening on port : ${port}`)
})