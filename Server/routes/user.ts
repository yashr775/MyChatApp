import express from "express"
import { getMyProfile, login, logout, newUser, searchUser } from "../controllers/user";
import { singleAvatar } from "../middlewares/multer";
import { isAuthenticated } from "../middlewares/auth";

const app = express.Router();

app.post("/new",singleAvatar,newUser)
app.get("/login",login)
app.get("/me",isAuthenticated,getMyProfile)
app.get("/logout",logout)
app.get("/search",searchUser)

export default app;