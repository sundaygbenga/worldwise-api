import { Router } from "express";

// CONTROLLERS
import {
	getCurrentUser,
	refreshAccessToken,
	signIn,
	signOut,
	signUp,
} from "../controllers/auth.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.get("/me", authorize, getCurrentUser);
authRouter.post("/refresh-token", refreshAccessToken);
authRouter.post("/sign-out", signOut);

export default authRouter;
