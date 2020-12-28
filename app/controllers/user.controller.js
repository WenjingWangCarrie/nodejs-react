/*
	Controller for testing Authorization
*/
exports.allAccess = (req, res) => {
	res.status(200).send("Public Content");
} // api/test/all

exports.userBoard = (req, res) => {
	res.status(200).send("User Content");
} // api/test/user for loggedin users

exports.adminBoard = (req, res) => {
	res.status(200).send("Admin Content");
} // api/test/admin