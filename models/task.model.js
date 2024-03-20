import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "must provide the name of task"],
        trim:true,
        maxlength:[20, "name can not be more than 20 characters"]
    },
    completed:{
        type:Boolean,
        default:false

    },
},{timestamps:true});

export default mongoose.model("Task",taskSchema);