require("mongoose");
const User = require("./models/user.js");
async function login(credential) {
	const query = {};
	if (credential.username) query.username = credential.username;
	else query.email = credential.email;
	const data = await User.findOne(query);
	if (data && credential.password == data.password) {
		return data;
	} else return null;
}
module.exports = login;
