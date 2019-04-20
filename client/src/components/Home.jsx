import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
	render(){
		return (
			<div>
			  <center><h1 className ="Header"git > &lt; Calories </h1></center>
			  <center><button><Link to="/BMI">Get Started</Link></button></center>
			</div>
		)
	}

}

export default Home;
