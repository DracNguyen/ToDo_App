import express from 'express';
import { getAllTasks, updateTask, createTask,deleteTask } from '../controllers/taskControllers.js';


const router = express.Router();

router.get("/", getAllTasks);

router.post("/",createTask);

router.put("/:id",updateTask);

router.delete("/:id",deleteTask);

export default router;