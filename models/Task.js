const mongoose=require('mongoose')
const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'a name of the task must be provided'],
        trim:true,
        maxlength:20
    },
    complted:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)