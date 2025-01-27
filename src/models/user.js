const mongoose = require("mongoose");
const moongose_unique_validator = require("mongoose-unique-validator");
const userSchema = mongoose.Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
});
userSchema.plugin(moongose_unique_validator);
const User = mongoose.model("Users", userSchema);
module.exports = User;
