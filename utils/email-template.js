import {
	signInTemplate,
	signUpTemplate,
	subscriptionReminderTemplate,
	subscriptionTemplate,
} from "./templates.js";

export const emailTemplates = [
	{
		label: "7 days before reminder",
		generateSubject: (data) =>
			`📅 Reminder: Your ${data.subscriptionName} Subscription Renews in 7 Days!`,
		generateBody: (data) =>
			subscriptionReminderTemplate({ ...data, daysLeft: 7 }),
	},
	{
		label: "5 days before reminder",
		generateSubject: (data) =>
			`⏳ ${data.subscriptionName} Renews in 5 Days – Stay Subscribed!`,
		generateBody: (data) =>
			subscriptionReminderTemplate({ ...data, daysLeft: 5 }),
	},
	{
		label: "2 days before reminder",
		generateSubject: (data) =>
			`🚀 2 Days Left!  ${data.subscriptionName} Subscription Renewal`,
		generateBody: (data) =>
			subscriptionReminderTemplate({ ...data, daysLeft: 2 }),
	},
	{
		label: "User Registration",
		generateSubject: (data) => `Account Created Successfully @${data.userName}`,
		generateBody: (data) => signUpTemplate({ ...data }),
	},
	{
		label: "User Login",
		generateSubject: (data) => `  Account Login Successful @${data.userName}`,
		generateBody: (data) => signInTemplate({ ...data }),
	},
	{
		label: "Created Subscription",
		generateSubject: (data) => ` New subscription alert!!! @${data.userName}`,
		generateBody: (data) => subscriptionTemplate({ ...data }),
	},
];
