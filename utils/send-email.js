import dayjs from "dayjs";
import { emailTemplates } from "./email-template.js";
import { SMTP_EMAIL } from "../config/env.js";
import transporter from "../config/nodemailer.js";

export const sendSubscriptionEmail = async ({ to, type, subscription }) => {
	if (!to || !type) throw new Error("Missing required parameters");

	const template = emailTemplates.find((t) => t.label === type);

	if (!template) throw new Error("Invalid email type");

	const mailInfo = {
		userName: subscription.user.name,
		subscriptionName: subscription.name,
		renewalDate: dayjs(subscription.renewalDate).format("MM, D, YYYY"),
		planName: subscription.name,
		price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
		paymentMethod: subscription.paymentMethod,
	};

	const subject = template.generateSubject(mailInfo);
	const message = template.generateBody(mailInfo);

	const mailOptions = {
		from: SMTP_EMAIL,
		to: to,
		subject: subject,
		html: message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) return console.log(error, "Error sending email");

		console.log(`Email sent to ${to}:` + info.response);
	});
};

export const sendReminderEmail = async ({ to, type, subscription }) => {
	if (!to || !type) throw new Error("Missing required parameters");

	const template = emailTemplates.find((t) => t.label === type);

	if (!template) throw new Error("Invalid email type");

	const mailInfo = {
		userName: subscription.user.name,
		subscriptionName: subscription.name,
		renewalDate: dayjs(subscription.renewalDate).format("MM, D, YYYY"),
		planName: subscription.name,
		price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
		paymentMethod: subscription.paymentMethod,
	};

	const message = template.generateBody(mailInfo);
	const subject = template.generateSubject(mailInfo);

	const mailOptions = {
		from: SMTP_EMAIL,
		to: to,
		subject: subject,
		html: message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) return console.log(error, "Error sending email");

		console.log(`Email sent to ${to}:` + info.response);
	});
};

export const sendActivationEmail = async ({ to, type, user }) => {
	if (!to || !type) throw new Error("Missing required parameters");

	const template = emailTemplates.find((t) => t.label === type);

	if (!template) throw new Error("Invalid email type");

	const mailInfo = {
		userName: user.name,
		userEmail: user.email,
		userId: user._id,
		createdDate: dayjs(user.createdAt).format("MM, D, YYYY"),
	};

	const message = template.generateBody(mailInfo);
	const subject = template.generateSubject(mailInfo);

	const mailOptions = {
		from: SMTP_EMAIL,
		to: to,
		subject: subject,
		html: message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) return console.log(error, "Error sending email");

		console.log(`Email sent to ${to}:` + info.response);
	});
};
