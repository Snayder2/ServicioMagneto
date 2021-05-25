require ('dotenv-flow').config

const express = require ('express')
const cors=require('cors')
const app=express()
app.set("port", process.env.PORT)
app.use(cors())
app.use(express.json())
app.use(require('./app.routes'))
module.exports=app