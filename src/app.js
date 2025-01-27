const express = require("express");
require("./moongose.js");
const User = require("./models/user.js");
const login = require("./login.js");
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/users/login", async (req, res) => {
	const data = await login(req.body);
	if (data) res.send(data);
	else res.send("incorrect details");
});

app.post("/users/signup", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.send(req.body);
	} catch (error) {
		console.log(error);
		res.send("email already exist");
	}
});

app.listen(port, () => {
	console.log("server is up on por 3000", port);
});
