import React, { Component } from 'react';
import {Link} from "react-router-dom";


const Header = () => (
	<div>
	  <div>
	    <button className="button is-text"><Link to="/BMI">Calculate BMI</Link></button>
	    <button className="button is-text"><Link to="/TotalCalories">Count Calories</Link></button>
	    <button className="button is-text"><Link to="/FoodSearch">Food Search</Link></button>
	  </div>
	</div>
	);

export default Header;
