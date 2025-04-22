import { Router } from "express";

// CONTROLLERS
import {
	refreshAccessToken,
	signIn,
	signOut,
	signUp,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/refresh-token", refreshAccessToken);
authRouter.post("/sign-out", signOut);

export default authRouter;
