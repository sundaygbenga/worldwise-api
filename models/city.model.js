import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
	{
		cityName: {
			type: String,
			required: [true, "City Name is required!"],
			trim: true,
		},
		country: {
			type: String,
			required: [true, "Country Name is required!"],
			trim: true,
		},
		emoji: {
			type: String,
			default: "🏳️‍🌈",
		},
		date: {
			type: Date,
			default: Date.now(),
		},
		notes: {
			type: String,
			trim: true,
		},
		position: {
			lat: {
				type: Number,
				required: false,
			},
			lng: {
				type: Number,
				required: false,
			},
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
	},
	{ timestamps: true }
);

const City = mongoose.model("City", citySchema);

export default City;
