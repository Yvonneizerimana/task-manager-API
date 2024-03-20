import express from "express"
import taskController from "../controllers/taskController.js";
const router=express.Router();

router.get("/allTasks",taskController.getAllTasks);
router.get("/getTaskById/:id",taskController.getTaskById);
router.post("/createTask",taskController.createTask);
router.put("/updateTask/:id",taskController.updateTask);
router.delete("/deleteTask/:id",taskController.deleteTask);

export default router

