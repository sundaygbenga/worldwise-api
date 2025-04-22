import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	try {
		// let token;

		// if (authHeader && authHeader.startsWith("Bearer")) {
		// 	token = authHeader.split(" ")[1];
		// }

		// if (!token) return res.status(401).json({ message: "Unauthorized" });

		if (!authHeader && !authHeader.startsWith("Bearer")) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		const token = authHeader.split(" ")[1];

		const decoded = jwt.verify(token, JWT_SECRET);
		const user = await User.findById(decoded.userId);

		if (!user) return res.status(401).json({ message: "Unauthorized" });

		req.user = user;

		next();
	} catch (error) {
		res.status(401).json({ message: "Unauthorized", error: error.message });
	}
};

export default authorize;
