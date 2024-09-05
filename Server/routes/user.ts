import express from "express"
import { login, newUser } from "../controllers/user";
import { singleAvatar } from "../middlewares/multer";

const app = express.Router();

app.post("/new",singleAvatar,newUser)
app.get("/login",login)

export default app;