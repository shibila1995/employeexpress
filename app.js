var express=require('express')
var bodyparser=require('body-parser')
var mongoose=require('mongoose')
var {studentmodel}=require('./models/studentmodel')
var {employeemodeel}=require('./models/employeemodeel')
var app=express()

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.post('/read',(req,res)=>{
var employeeObject=new employeemodel(req.body)
res.json(employeeObject)
})


app.listen(3000,()=>{
    console.log("server started")
})