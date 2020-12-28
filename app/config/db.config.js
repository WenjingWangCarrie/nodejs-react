module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "123456",
	DB: "react",
	dialect: "mysql",
	pool: { // Sequelize connection pool configuration
		max: 5, // number of connection in pool
		min: 0,
		acquire: 30000, // maximum time, pool will try to get connection before throwing error
		idle: 10000 // a connection can be idle before being released
	}
};