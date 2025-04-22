import aj from "../config/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

const arcjetMiddleware = async (req, res, next) => {
	try {
		const decision = await aj.protect(req, { requested: 1 });
		console.log("Arcjet decision", decision);

		if (decision.isDenied()) {
			if (decision.reason.isRateLimit())
				return res.status(429).json({ error: "Rate limit exceeded" });

			if (decision.reason.isBot())
				return res.status(403).json({ error: "Bots detected" });

			return res.status(403).json({ error: "Access denied" });
		} else if (decision.results.some(isSpoofedBot)) {
			return res.status(403).json({ error: "Access denied" });
		}

		next();
	} catch (error) {
		console.log(`Arcjet Middleware Error: ${error}`);
		next(error);
	}
};

export default arcjetMiddleware;
