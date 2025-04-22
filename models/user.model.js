import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "User Name is required!"],
			trim: true,
			minLength: 2,
			maxLength: 50,
		},
		email: {
			type: String,
			required: [true, "User Email is required"],
			unique: true,
			trim: true,
			lowercase: true,
			match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
		},
		password: {
			type: String,
			required: [true, "User Password is required"],
			minLength: 6,
		},
	},
	{ timestamps: true }
);

// userSchema.pre("save", async function (next) {
// 	// if (!this.isModified("password")) return next();
// 	const salt = await bcrypt.genSalt(10);
// 	this.password = await bcrypt.hash(this.password, salt);
// 	next();
// });

const User = mongoose.model("User", userSchema);

export default User;
