import nodemailer from "nodemailer";

import { SMTP_EMAIL, SMTP_PASSWORD } from "./env.js";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: SMTP_EMAIL,
		pass: SMTP_PASSWORD,
	},
});

export default transporter;
