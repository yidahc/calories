import React, { Component } from "react";

import Header from "./Header.jsx";
import App from "../App.jsx";
import { timingSafeEqual } from "crypto";
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
      ID: ""
  	}
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calculateBMI = this.calculateBMI.bind(this);
  this.identifyingClient = this.identifyingClient.bind(this);
  this.getCals = this.getCals.bind(this);
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

  identifyingClient = function (BMI){
      let result = ""
   if(BMI < 18.5){
      result = "Underweight"
   } else if(BMI > 18.5 && BMI < 24.9){
      result = "Normal" 
   } else if(BMI > 25 && BMI < 29.9) {
      result = "Overweight"
   } else {
      result = "Obese"
   }
   this.setState({
     ID: result
   })
   }
  
getCals() {
  let num;
  if (this.state.gender === "male") {
    num = 2500;
  } else { 
    if (this.state.gender === "female") {
    num = 2000;
    }
  }
  this.setState({
    calories_needed: num
  })
}   

handleSubmit(e) {
  e.preventDefault();
  var { name, weight, height, gender, BMI } = this.state;
  var BMI = this.calculateBMI(height, weight);
  console.log('i am  bmi:'+BMI);
  this.identifyingClient(BMI);
  this.setState({ 
    BMI: BMI
  });
  this.getCals()
  this.props.postData("/userInfo", {
    name: name,
    weight: weight,
    height: height,
    gender: gender,
    BMI: BMI,
    calories_needed: this.state.calories_needed
  });
  this.setState({
    name: " ",
    weight: " ",
    height: " ",
    gender: "female"
  });
  }


render() {
    
    const { name, weight, height, gender } = this.state;
    const BMI = this.state.BMI
    console.log('BMI:' + BMI)
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
         <select className="button is-link is-outlined"
           name="gender"
           value={gender}
           onChange={this.handleInput}
           >
           <option value="female">female</option>
           <option value="male">male</option>
         </select>
        <br />
         <button onClick={ this.handleSubmit } >Submit</button>
         <h1>Your BMI is: { this.state.BMI } </h1>
         <h2>Your BMI is considered to be: { this.state.ID } </h2>
        </div>
        </div>
      );
   }
}

export default BMI;
       