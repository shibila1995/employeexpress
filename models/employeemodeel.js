var mongoose=require('mongoose');
var employeeschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        position:{
            type:String,
            required:true
        },
        designation:{
            type:Number,
            required:true
        }
    }
);
var employeemodeel=mongoose.model('employees',employeeschema);
module.exports={employeemodeel};