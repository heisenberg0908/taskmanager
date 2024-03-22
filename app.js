require('dotenv').config()
const express=require('express')
const connectDB = require('./db/connect')
const app=express()
const mainrouter=require('./routes/tasks')
const notfound=require('./middlewares/not-found')
const errorHandlerMiddleware=require('./middlewares/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use(notfound)
app.use(errorHandlerMiddleware)

app.use('/api/v1/tasks',mainrouter)



const port=3000
const start=async(req,res)=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('db connected....')
        app.listen(port,console.log(`app is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
