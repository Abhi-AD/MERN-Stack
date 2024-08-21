import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
     res.send({ message: "Test OK!" });
});

app.listen(8000, () => {
     console.log("server started on localhost:8000");
});