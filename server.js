/*
	Express is for building the Rest apis
	body-parser helps to parse the request and create the req.body object
	cors provides Express middleware to enable CORS
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path)); // serve static react files

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

// force: true will drop the table if it already exists
/*
db.sequelize.sync({force: true})
	.then(() => {
		console.log('Drop and Resync DB');
		initial(); // help to create 2 rows in database
	});
*/
db.sequelize.sync();

// routes
app.get("/", (req, res) => {
	res.sendFile(path + "index.html");
	// res.json({ message: "Welcome to React & Node.js application"});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set a port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

function initial() {
	Role.create({
		id: 1,
		name: "user"
	});

	Role.create({
		id: 2,
		name: "admin"
	});
}