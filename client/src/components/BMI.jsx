import React, { Component } from "react";

import Header from "./Header.jsx";
import App from "../App.jsx";
import '../CSS/BMI.css';


class BMI extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  name: " ",
  	  weight: " ",
  	  height: " ",
      gender: "female",
      BMI: " ",
      calories_needed: " ",
  	}
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calculateBMI = this.calculateBMI.bind(this);
}
	

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }



  calculateBMI (height, weight) {
    let m = height*height;
    return weight / m;
   }



  handleSubmit(e) {
    e.preventDefault();
    var { name, weight, height, gender, BMI, calories_needed } = this.state;
    var BMI = this.calculateBMI(height, weight);
      if (gender === "male") {
        calories_needed = 2500;
      } else {
          calories_needed = 2000;
        }
    this.props.postData("/userInfo", {
      name: name,
      weight: weight,
      height: height,
      gender: gender,
      BMI: BMI,
      calories_needed: calories_needed,
    });

    this.setState({
      name: " ",
      weight: " ",
      height: " ",
      gender: "female",
      BMI: " ",
      calories_needed: " ",
    });
  }


render() {
    
    const { name, weight, height, gender, BMI, calories_needed } = this.state;
    const { postData } = this.props;
    return (
      <div>
        <div>
          <Header />
        </div>
        <label>
          name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          weight:{" "}
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          height:{" "}
          <input
            type="text"
            name="height"
            value={height}
            onChange={this.handleInput}
          />
        </label>

         <br />
         <select className="button is-link is-outlined"
           name="gender"
           value={gender}
           onChange={this.handleInput}
           >
           <option value="female">female</option>
           <option value="male">male</option>
         </select>
        <br />
         <button onClick={this.handleSubmit} className="button is-link is-outlined">Submit</button>
        </div>
      );
   }
}

export default BMI;
       
       /*
        <br />
        <select
        name="category"
        value={category}
        onChange={this.handleInput}
        >
          <option value="utilities">utilities</option>
          <option value="food">food</option>
          <option value="education">education</option>
          <option value="rent/housing">rent/housing</option>
          <option value="health/beauty">health/beauty</option>
          <option value="savings">savings</option>
          <option value="debt">debt</option>
          <option value="transportation">transportation</option>
          <option value="entertainment">entertainment</option>
          <option value="miscellaneous">miscellaneous</option>
        </select>
        <button
          onClick={this.handleSubmit}
        >Submit</button>
      </div>
      );
    }

    */