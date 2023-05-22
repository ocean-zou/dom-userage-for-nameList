const express=require('express')
const router=require('./router')
const parser=require('body-parser')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(parser.json())
app.use(router)
const PORT=8080

app.listen(PORT, ()=>{
    console.log('server is running on http://localhost:8080')
})