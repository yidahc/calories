import React, { Component } from 'react';
import {Link} from "react-router-dom";


const Header = () => (
	<div>
	  <div className="navbar">
	    <button><Link to="/BMI">Calculate BMI</Link></button>
	    <button><Link to="/TotalCalories">Count Calories</Link></button>
	  </div>
	</div>
	);

export default Header;