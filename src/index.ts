import express,{Application,Request,Response,NextFunction} from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
mongoose.set('strictQuery', false);
import router from './Routes/crudRoutes';
dotenv.config({
    path: path.join(__dirname, "..", "config.env")
});
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/note", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "Hello World",
    });
});

mongoose.connect(process.env.MONGO as string).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
