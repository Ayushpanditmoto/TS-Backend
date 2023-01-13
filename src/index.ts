import express,{Application,Request,Response,NextFunction} from "express";
const app: Application = express();
const port = 3000||process.env.PORT;

const add=(a:number,b:number):number=>a+b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hello World! ${add(2,6)}`);
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
