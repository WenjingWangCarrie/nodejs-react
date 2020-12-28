import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from './services/authService';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardAdmin from './components/BoardAdmin';

const App = () => {
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
    	const user = AuthService.getCurrentUser();

    	if (user) {
    		setCurrentUser(user);
    		setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    	}
    }, []);

    const logOut = () => {
    	AuthService.logout();
    }

	return (
        <div>
           	<nav class="navbar navbar-expand navbar-dark bg-dark">
           		<Link to={"/"} class="navbar-brand">React</Link>

           		<div class="navbar-nav mr-auto">
           			<li class="nav-item">
           				<Link to={"/home"} class="nav-link">Home</Link>
           			</li>

           			{showAdminBoard && (
           				<li class="nav-item">
           					<Link to={"/admin"} class="nav-link">Admin Board</Link>
           				</li>
           			)}

           			{currentUser && (
           				<li class="nav-item">
           					<Link to={"/user"} class="nav-link">User</Link>
           				</li>
           			)}
           		</div>

           		{currentUser ? (
           			<div class="navbar-nav ml-auto">
           				<li class="nav-item">
           					<Link to={"/profile"} class="nav-link">{currentUser.username}</Link>
           				</li>
           				<li class="nav-item">
           					<a href="/" class="nav-link" onClick={logOut}>Logout</a>
           				</li>
           			</div>
           		) : (
           			<div class="navbar-nav ml-auto">
           				<li class="nav-item">
           					<Link to={"/login"} class="nav-link">Login</Link>
           				</li>
           				<li class="nav-item">
           					<Link to={"/register"} class="nav-link">Sign Up</Link>
           				</li>
           			</div>
           		)} 
           	</nav>

           	<div class="container mt-3">
           		<Switch>
           			<Route exact path={["/", "/home"]} component={Home} />
           			<Route exact path="/login" component={Login} />
           			<Route exact path="/register" component={Register} />
           			<Route exact path="/profile" component={Profile} />
           			<Route path="/user" component={BoardUser} />
           			<Route path="/admin" component={BoardAdmin} />
           		</Switch>
           	</div>
        </div>
    );
}

export default App;
