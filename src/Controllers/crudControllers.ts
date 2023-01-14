import { Request, Response } from "express";
const getAllUsers= async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Get all users"
    });
    
}
const getUser= async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Get user"
    });
    
}
const createUser= async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Create user"
    });
    
}

const updateUser= async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Update user"
    });
    
}
const deleteUser= async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Delete user"
    });
    
}

export {getAllUsers,getUser,createUser,updateUser,deleteUser};