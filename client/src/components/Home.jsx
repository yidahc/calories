import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./home.css"


class Home extends Component {
	render(){
		return (
			<div>
			  <center><h1> &lt; Calories </h1></center>
			  <center><button><Link to="/BMI">Get Started</Link></button></center>
			</div>
		)
	}

}

export default Home;
