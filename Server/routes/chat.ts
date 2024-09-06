import { newGroupChat } from "../controllers/chat";
import { isAuthenticated } from "../middlewares/auth";
import app from "./user";


app.use(isAuthenticated);
app.post("/new",newGroupChat)


export default app;

