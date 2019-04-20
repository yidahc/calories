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
  	}
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calculateBMI = this.calculateBMI.bind(this)
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
    const { name, weight, height, gender } = this.state;
    let BMI = this.calculateBMI(height, weight);
    this.props.postData('/userInfo', {
      name: name,
      weight: weight,
      height: height,
      gender: gender,
      BMI: BMI,
    });

    this.setState({
      name: '',
      weight: '',
      height: '',
      gender: '',
      BMI: '',
    });
  }


render() {
    
    const { name, weight, height, gender } = this.state;
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