const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,maxlength:30,trim:true},
    password:{type:String,required:true,trim:true},
    firstName:{type:String,default:""},
    lastName:{type:String,default:""},
    email:{type:String,default:""},
    mobileNumber:{type:String,default:""},
    country:{type:String,default:""},
    linkedin:{type:String,default:""},
    github:{type:String,default:""},
    portfolio:{type:String,default:""},
    careerObjective:{type:String,default:""},
    address:{type:String,default:""},
    education:{type:Array, default:[]},
    skills:{type:Array , default:[]},
    experience:{type:Array , default:[]},
    projects:{type:Array , default:[]},
    certificates:{type:Array , default:[]},



},{ 
    timestamps:true
});
const userModel=mongoose.model("users",userSchema);
module.exports=userModel;