import React, { Component } from 'react';
import {Link} from "react-router-dom";
import BMI from './BMI.jsx';


const Header = () => (
	<div>
	  <div className="navbar">
	    <button className="button is-text"><Link to="/BMI">Calculate BMI</Link></button>
	    <button className="button is-text"><Link to="/TotalCalories">Count Calories</Link></button>
	  </div>
	</div>
	);

export default Header;