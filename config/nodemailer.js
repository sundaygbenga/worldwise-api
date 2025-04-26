import nodemailer from "nodemailer";

import { SMTP_EMAIL, SMTP_PASSWORD } from "./env.js";

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // true for port 465, false for other ports
	auth: {
		user: SMTP_EMAIL,
		pass: SMTP_PASSWORD,
	},
});

export default transporter;
