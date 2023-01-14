import mongoose from "mongoose";
// import { Schema, Document } from "mongoose";

export interface ITodo extends mongoose.Document {
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Todo = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;