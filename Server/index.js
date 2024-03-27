
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import vehicle from "./API/Routes/VehiclesData.js"
import dotenv from "dotenv"
dotenv.config()

const app=express();

const PORT=5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is connected")
}).catch(err=>console.log(err,"something wrong"))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
app.use(cors())
app.use(bodyParser.json());
app.use('/vehicle',vehicle)