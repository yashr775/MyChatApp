import express from "express";

import userRoute from "./routes/user"

const app =express();

const PORT = 3000

app.use("/user",userRoute)



app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`)
})