import React, { Component } from "react";

import Header from "./Header.jsx";
import App from "../App.jsx";
import { timingSafeEqual } from "crypto";


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
      ID: ""
  	}
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calculateBMI = this.calculateBMI.bind(this);
  this.identifyingClient = this.identifyingClient.bind(this);
}
	

  handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }



  calculateBMI = function (height, weight) {
    let m = height*height;
    let result = (weight / m);
    return result.toFixed(1)
   }

   
  //  identifyingClient = function (BMI){
  //  const BMI = this.state.BMI
  //  if(BMI < 18.5){
  //    this.setState({ID: "Underweight"})
  //  } else if(BMI > 18.5 && BMI < 24.9){
  //    this.setState({ID: "Normal"})
  //  } else if(BMI > 25 && BMI < 29.9) {
  //    this.setState({ID: "Overweight"})
  //  } else {
  //    this.setState({ID: "Obese"})
  //  }
  //  }
  //  }
// If your BMI is...	You are...
// Under 18.5 --> Underweight
// Between 18.5 and 24.9 -->	Normal
// Between 25 and 29.9 --> 	Overweight
// 30 and Over	Obese
  handleSubmit(e) {
    e.preventDefault();
    var { name, weight, height, gender, BMI, calories_needed } = this.state;
    var BMI = this.calculateBMI(height, weight);
    this.setState({BMI: BMI})
    console.log(BMI)
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
         <select
           name="gender"
           value={gender}
           onChange={this.handleInput}
           >
           <option value="female">female</option>
           <option value="male">male</option>
         </select>
        <br />
         <button onClick={ this.handleSubmit } onClick={ this.identifyingClient }>Submit</button>
         <h1>Your BMI is: { this.state.BMI } </h1>
         <h2>Your BMI is considered to be: { this.state.ID } </h2>
        </div>
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