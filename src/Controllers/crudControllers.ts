import { Request, Response } from "express";
import Todo from "../Models/todoModels";

const getAllUsers= async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
    res.status(200).json({
        message: "Get all users",
        todos
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        });
        
    }
    
    
}
const getUser= async (req: Request, res: Response) => {
    try {
        
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
        message: "Get user",
        todo
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        });
        
    }
    
}
const createUser= async (req: Request, res: Response) => {
    try {
        const {title,description} = req.body;
    const todo = await Todo.create({
        title,
        description
    });
    res.status(200).json({
        message: "Create user",
        todo
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        });
        
    }
    
}

const updateUser= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
    const {title,description} = req.body;
    const todo = await Todo.findByIdAndUpdate(id,{
        title,
        description
    },{new:true});
    res.status(200).json({
        message: "Update user",
        todo
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        });
        
    }    
}
const deleteUser= async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
        message: "Delete user",
        todo
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error
        }); 
        
    }
    
}

export {getAllUsers,getUser,createUser,updateUser,deleteUser};