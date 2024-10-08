import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";
import { v2 as cloudinary } from "cloudinary";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.COLOUDINARY_NAME,
  api_key: process.env.COLOUDINARY_API_KEY,
  api_secret: process.env.COLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());

app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);

app.listen(8000, () => {
  console.log("server started on localhost:8000");
});
