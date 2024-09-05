import express from "express";

import userRoute from "./routes/user"
import { connectDB } from "./utils/features";
import dotenv from"dotenv"

dotenv.config({path:"./.env"})


const app =express();

const mongoUri = process.env.MONGO_URI
const PORT = process.env.port || 3000
connectDB(mongoUri)

app.use(express.json())


app.use("/user",userRoute)



app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`)
})