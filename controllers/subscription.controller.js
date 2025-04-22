import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
	try {
		const subscription = await Subscription.create({
			...req.body,
			user: req.user._id,
		});

		res.status(200).json({
			success: true,
			message: "Subscription created successfully",
			data: subscription,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllSubscriptions = async (req, res, next) => {
	try {
		const subscriptions = await Subscription.find();
		res.status(200).json({
			success: true,
			message: "Users subscriptions retrieved successfully",
			data: subscriptions,
		});
	} catch (error) {
		next(error);
	}
};
export const getSubscriptionById = async (req, res, next) => {
	try {
		const subscription = await Subscription.findById(req.params.id);

		if (!subscription) {
			const error = new Error("Subscription not found");
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json({
			success: true,
			message: "Subscription details retrieved successfully",
			data: subscription,
		});
	} catch (error) {
		next(error);
	}
};

export const getUserSubscriptions = async (req, res, next) => {
	try {
		// Check if the user is the same as the on in the token
		if (req.user.id !== req.params.id) {
			const error = new Error("You are not the owner of this account");
			error.status = 401;
			throw error;
		}

		const subscriptions = await Subscription.find({ user: req.params.id });

		res.status(200).json({
			success: true,
			message: "User subscription retrieved successfully",
			data: subscriptions,
		});
	} catch (error) {
		next(error);
	}
};

export const deleteSubscription = async (req, res, next) => {
	const subId = req.params.id;
	try {
		if (!subId) {
			const error = new Error("There was a problem deleting subscription");
			error.status = 401;
			throw error;
		}

		const subscription = await Subscription.findByIdAndDelete(subId);

		if (!subscription) {
			const error = new Error("Subscription not found");
			error.status = 404;
			throw error;
		}

		res
			.status(200)
			.json({ success: true, message: "Subscription deleted successfully" });
	} catch (error) {
		next(error);
	}
};
