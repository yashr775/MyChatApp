import express from "express";

import userRoute from "./routes/user"
import chatRoute from "./routes/chat"
import { connectDB } from "./utils/features";
import dotenv from"dotenv"
import { errorMiddleware } from "./middlewares/error";
import cookieParser from "cookie-parser";

dotenv.config({path:"./.env"})


const app =express();

const mongoUri = process.env.MONGO_URI
const PORT = process.env.port || 3000
connectDB(mongoUri)

app.use(express.json())
app.use(cookieParser());


app.use("/user",userRoute)
app.use("/chat",chatRoute)
app.use(errorMiddleware);


app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`)
})