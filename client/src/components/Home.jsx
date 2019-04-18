import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
	render(){
		return (
			<div>
			  <h1> -Calories</h1>
			  <button><Link to="/BMI">Get Started</Link></button>
			</div>
		)
	}

}

export default Home;