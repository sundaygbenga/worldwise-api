import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// ENVIRONMENT VARIABLES
import { PORT } from "./config/env.js";

import connectToDatabase from "./database/mongodb.js";

// ROUTERS
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subsRouter from "./routes/subscription.routes.js";
import cityRouter from "./routes/city.routes.js";
import workflowRouter from "./routes/workflow.routes.js";

//  MIDDLEWARES
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

// APP INIT
const app = express();

//  Express built-in middleware
app.use(express.json()); // Handle json data sent in request
app.use(express.urlencoded({ extended: false })); // Process form data sent via html forms in simple format
app.use(cookieParser()); // Reads cookie from incoming request so the app can store data
app.use(arcjetMiddleware);

//  CORS
const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:3000",
	"https://worldwise-travelers.netlify.app",
	// Add any others you need
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true, // if you're using cookies or auth headers
	})
);

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subsRouter);
app.use("/api/v1/cities", cityRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
	res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, async () => {
	console.log(`Subcription Tracker API is running on http://localhost:${PORT}`);

	await connectToDatabase();
});

export default app;
