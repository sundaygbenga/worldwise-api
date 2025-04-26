import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
	PORT,
	SERVER_URL,
	NODE_ENV,
	DB_URI,
	JWT_SECRET,
	JWT_EXPIRES_IN,
	JWT_REFRESH_SECRET,
	JWT_REFRESH_EXPIRES_IN,
	ARCJET_ENV,
	ARCJET_KEY,
	QSTASH_URL,
	QSTASH_TOKEN,
	QSTASH_CURRENT_SIGNING_KEY,
	QSTASH_NEXT_SIGNING_KEY,
	SMTP_PASSWORD,
	SMTP_EMAIL,
} = process.env;
