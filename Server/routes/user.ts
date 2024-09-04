import express from "express"
import { login } from "../controllers/user";

const app = express.Router();


app.get("/login",login)

export default app;