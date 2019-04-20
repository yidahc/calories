import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../CSS/Home.css';



class Home extends Component {
	render(){
		return (
			<div>
			  <center><h1 className="title is-1"> &lt; Calories </h1></center>
			  <center><button className="button is-primary is-danger"><Link to="/BMI">Get Started</Link></button></center>
			</div>
		)
	}

}

export default Home;
