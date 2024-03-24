import taskSchema from "../models/task.model.js"
import asyncWarapper from "../middleware/async.js"

const taskController={

    //get list of all tasks

    getAllTasks:asyncWarapper(async(req,res)=>{
       
            const listOfTask=await taskSchema.find();
            res.status(200).json({
                message:"List of all tasks",
                numberOfTasks:listOfTask.length,
                task:listOfTask
            });
                    
                    
    }),

    //create new task

    createTask:asyncWarapper(async(req,res)=>{
       
const addTask=await taskSchema.create(req.body);
res.status(201).json({
    message:"Task added successfuly",
    task:addTask
});
       
    }),

//get task by using id of task

    getTaskById:asyncWarapper(async(req,res)=>{
       
            const id=req.params.id;
            const taskById=await taskSchema.findById(id);
            res.status(200).json({
                message:`you are getting the task with this id ${id}`,
                task:taskById
            });
                    
    }),

    //update task by using id

    updateTask:asyncWarapper(async(req,res)=>{
        
            const id=req.params.id;
            const updateTask=await taskSchema.findByIdAndUpdate(id,req.body,{
                set:true,
                runValidators:true
            });
            res.status(200).json({
               
                task:updateTask
            });
                   
    }),

    //delete task by id 

    deleteTask:asyncWarapper(async(req,res)=>{
        
            const id=req.params.id;
            const deleteTask=await taskSchema.findByIdAndDelete(id);
            res.status(200).json({
               message:"task deleted successfuly",
                task:deleteTask
            })
        })}

export default taskController;