import React, { Component } from 'react';

import Header from './Header.jsx';
import App from '../App.jsx';


class BMI extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  name: '',
  	  weight: '',
  	  height: '',
      gender: '',
      BMI: '',
      calories_needed: '',
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
        if (gender === "female") {
          calories_needed = 2000;
        }
      }
    this.props.postData('/userInfo', {
      name: name,
      weight: weight,
      height: height,
      gender: gender,
      BMI: BMI,
      calories_needed: calories_needed,
    });

    this.setState({
      name: '',
      weight: '',
      height: '',
      gender: '',
      BMI: '',
      calories_needed: '',
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
          name:{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          weight:{' '}
          <input
            type="text "
            name="weight"
            value={weight}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          height:{' '}
          <input
            type="text"
            name="height"
            value={height}
            onChange={this.handleInput}
          />
        </label>

         <br />
        <label>
          gender:{' '}
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default BMI;