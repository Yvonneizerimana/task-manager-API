import taskSchema from "../models/task.model.js"

const taskController={

    //get list of all tasks

    getAllTasks:async(req,res)=>{
        try{
            const listOfTask=await taskSchema.find();
            res.status(200).json({
                message:"List of all tasks",
                numberOfTasks:listOfTask.length,
                task:listOfTask
            });
                    }
                    catch(error){
            console.error(error.message);
            res.status(500).json({
                message:"internal server error"
            });
                    }
    },

    //create new task

    createTask:async(req,res)=>{
        try{
const addTask=await taskSchema.create(req.body);
res.status(201).json({
    message:"Task added successfuly",
    task:addTask
});
        }
        catch(error){
console.error(error.message);
res.status(500).json({
    message:"internal server error"
});
        }
    },

//get task by using id of task

    getTaskById:async(req,res)=>{
        try{
            const id=req.params.id;
            const taskById=await taskSchema.findById(id);
            res.status(200).json({
                message:`you are getting the task with this id ${id}`,
                task:taskById
            });
                    }
                    catch(error){
            console.error(error.message);
            res.status(500).json({
                message:"internal server error"
            });
                    }
    },

    //update task by using id

    updateTask:async(req,res)=>{
        try{
            const id=req.params.id;
            const updateTask=await taskSchema.findByIdAndUpdate(id,req.body,{
                set:true,
                runValidators:true
            });
            res.status(200).json({
               
                task:updateTask
            });
                    }
                    catch(error){
            console.error(error.message);
            res.status(500).json({
                message:"internal server error"
            });
                    }
    },

    //delete task by id 

    deleteTask:async(req,res)=>{
        try{
            const id=req.params.id;
            const deleteTask=await taskSchema.findByIdAndDelete(id);
            res.status(200).json({
               message:"task deleted successfuly",
                task:deleteTask
            });
                    }
                    catch(error){
            console.error(error.message);
            res.status(500).json({
                message:"internal server error"
            });
                    }
    }
    
}

export default taskController;