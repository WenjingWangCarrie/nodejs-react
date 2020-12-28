/* Authentication service, uses Axios for 
   HTTP requests and Local Storage for user
   information & JWT.
*/

import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
	return axios.post(API_URL + "signup", {
		username,
		email,
		password,
	});
}

const login = (username, password) => {
	return axios.post(API_URL + "login", {
	    username, 
	 	password,
	})
	.then((res) => {
		if(res.data.accessToken) {
			localStorage.setItem("user", JSON.stringify(res.data));
		}

		return res.data;
	});
}

const logout = () => {
	// window.localStorage.clear(); 
	window.localStorage.removeItem("user");
	// this.props.history.push("/");
}

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
}

export default {
	login,
	logout,
	register,
	getCurrentUser,
}