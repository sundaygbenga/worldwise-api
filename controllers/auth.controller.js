import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// APP MODULES
import User from "../models/user.model.js";
import {
	JWT_EXPIRES_IN,
	JWT_REFRESH_EXPIRES_IN,
	JWT_REFRESH_SECRET,
	JWT_SECRET,
	NODE_ENV,
} from "../config/env.js";
import { sendActivationEmail, sendLoginEmail } from "../utils/send-email.js";
const saltRounds = 10;

export const signUp = async (req, res, next) => {
	// Mongoose transaction session for atomic operation / atomic update. Read more
	const session = await mongoose.startSession();
	session.startTransaction();

	try {
		const { name, email, password } = req.body;

		// Check if a user exist
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			const error = new Error("User already exists");
			error.statusCode = 409;
			throw error;
		}

		// Hash password
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user
		const newUsers = await User.create(
			[{ name, email, password: hashedPassword }],
			{ session }
		);

		// Generate token
		const accessToken = jwt.sign(
			{ userId: newUsers[0]._id, userEmail: newUsers[0].email },
			JWT_SECRET,
			{
				expiresIn: JWT_EXPIRES_IN,
			}
		);

		// Refresh Token (long-lived)
		const refreshToken = jwt.sign(
			{ userId: newUsers[0]._id },
			JWT_REFRESH_SECRET,
			{ expiresIn: JWT_REFRESH_EXPIRES_IN }
		);

		await sendActivationEmail({
			to: newUsers[0].email,
			type: "User Registration",
			user: newUsers[0],
		});
		await session.commitTransaction();
		session.endSession();

		// Send refresh token in cookie
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			secure: NODE_ENV === "production",
			sameSite: "Strict",
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});

		res.status(201).json({
			success: true,
			message: "User created successfully",
			data: {
				accessToken,
				user: newUsers[0],
			},
		});
	} catch (error) {
		await session.abortTransaction();
		session.endSession();
		next(error);
	}
};
export const signIn = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			const error = new Error("User not found");
			error.statusCode = 404;
			throw error;
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			const error = new Error(`Invalid email/password`);
			error.statusCode = 401;
			throw error;
		}

		const accessToken = jwt.sign(
			{ userId: user._id, userEmail: user.email },
			JWT_SECRET,
			{
				expiresIn: JWT_EXPIRES_IN,
			}
		);

		// Refresh Token (long-lived)
		const refreshToken = jwt.sign({ userId: user._id }, JWT_REFRESH_SECRET, {
			expiresIn: JWT_REFRESH_EXPIRES_IN,
		});

		await sendLoginEmail({
			to: user.email,
			type: "User Login",
			user: user,
		});

		// Send refresh token in cookie
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			secure: NODE_ENV === "production",
			sameSite: "Strict",
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});

		res.status(200).json({
			success: true,
			message: "User signed in successfully",
			data: {
				accessToken,
				user,
			},
		});
	} catch (error) {
		next(error);
	}
};
export const getCurrentUser = async (req, res, next) => {
	try {
		if (!req.user) {
			const error = new Error("User not authenticated");
			error.statusCode = 401;
			throw error;
		}

		res.status(200).json({
			success: true,
			message: "Authenticated user fetched successfully",
			user: req.user,
		});
	} catch (error) {
		next(error);
	}
};

export const refreshAccessToken = (req, res, next) => {
	try {
		const token = req.cookies.refreshToken;

		if (!token) {
			return res.status(401).json({ message: "Refresh token missing" });
		}

		jwt.verify(token, JWT_REFRESH_SECRET, (err, decoded) => {
			if (err) {
				return res.status(403).json({ message: "Invalid refresh token" });
			}

			const newAccessToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET, {
				expiresIn: "15m",
			});

			res.status(200).json({
				success: true,
				accessToken: newAccessToken,
			});
		});
	} catch (error) {
		next(error);
	}
};

export const signOut = async (req, res, next) => {
	try {
		// Clear the cookie named 'token'
		res.clearCookie("refreshToken", {
			httpOnly: true,
			secure: NODE_ENV === "production",
			sameSite: "strict",
		});

		res.status(200).json({
			success: true,
			message: "User signed out successfully",
		});
	} catch (error) {
		next(error);
	}
};
