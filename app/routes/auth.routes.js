/* 
	Authentication:

	POST /api/auth/signup
	POST /api/auth/login
*/

const { verifySignup } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post("/api/auth/signup",
		[
			verifySignup.checkDuplicate,
			verifySignup.checkRolesExisted
		],
		controller.signup
	);

	app.post("/api/auth/login", controller.login);
};