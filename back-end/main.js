import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./src/routes/user-routes.js";

const app= express();
const PORT= 2015;

app.use(express.json());
app.use(cors());
app.use(router);

const connectDb = async() => {
    await mongoose.connect(
        "mongodb+srv://tseegiianudari:Katomi_0909@cluster0.qepmy4h.mongodb.net/"
    );
    console.log("database connected");
}; 
connectDb();


app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
});

