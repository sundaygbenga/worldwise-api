import City from "../models/city.model.js";

export const createCity = async (req, res, next) => {
	try {
		const city = await City.create({
			...req.body,
			user: req.user._id,
		});

		res.status(200).json({
			success: true,
			message: "City created successfully",
			data: city,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllCities = async (req, res, next) => {
	try {
		const cities = await City.find();
		res.status(200).json({
			success: true,
			message: "Cities retrieved successfully",
			data: cities,
		});
	} catch (error) {
		next(error);
	}
};

export const getCityById = async (req, res, next) => {
	try {
		const city = await City.findById(req.params.id);

		if (!city) {
			const error = new Error("No city collections found");
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json({
			success: true,
			message: "City retrieved successfully",
			data: city,
		});
	} catch (error) {
		next(error);
	}
};

export const getUserCity = async (req, res, next) => {
	try {
		// Check if the user is the same as the on in the token
		if (req.user.id !== req.params.id) {
			const error = new Error("You are not the owner of this account");
			error.status = 401;
			throw error;
		}

		const city = await City.find({ user: req.params.id });

		res.status(200).json({
			success: true,
			message: "City retrieved successfully",
			data: city,
		});
	} catch (error) {
		next(error);
	}
};

export const updateCity = async (req, res, next) => {
	try {
		const cityId = req.params.id;
		const updateData = req.body;

		const updatedCity = await City.findByIdAndUpdate(cityId, updateData, {
			new: true,
			runValidators: true,
		});

		if (!updateCity) {
			const error = new Error("City not found");
			error.status = 404;
			throw error;
		}

		res.status(200).json({
			success: true,
			message: "City updated successfully",
			data: updatedCity,
		});
	} catch (error) {
		next(error);
	}
};
export const deleteCity = async (req, res, next) => {
	const cityId = req.params.id;
	try {
		if (!cityId) {
			const error = new Error("There was a problem deleting City");
			error.status = 401;
			throw error;
		}

		const city = await City.findByIdAndDelete(cityId);

		if (!city) {
			const error = new Error("No city collections found");
			error.status = 404;
			throw error;
		}

		res
			.status(200)
			.json({ success: true, message: "City deleted successfully" });
	} catch (error) {
		next(error);
	}
};
