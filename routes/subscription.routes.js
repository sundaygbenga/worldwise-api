import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
	createSubscription,
	deleteSubscription,
	getAllSubscriptions,
	getSubscriptionById,
	getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subsRouter = Router();

subsRouter.get("/", getAllSubscriptions);

subsRouter.get("/:id", getSubscriptionById);

subsRouter.post("/", authorize, createSubscription);

subsRouter.put("/:id", (req, res) =>
	res.send({ title: "UPDATE subscription" })
);

subsRouter.delete("/:id", authorize, deleteSubscription);

subsRouter.get("/user/:id", authorize, getUserSubscriptions);

subsRouter.get("/:id/cancel", (req, res) =>
	res.send({ title: "CANCEL subscription" })
);

subsRouter.get("/upcoming-renewals", (req, res) =>
	res.send({ title: "GET upcoming renewals" })
);

export default subsRouter;
