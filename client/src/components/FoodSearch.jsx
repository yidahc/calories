import React, { Component } from 'react';
import axios from 'axios';
import Hints from "./Hints.jsx";

const apiURL = 'https://api.edamam.com/api/food-database/parser?ingr=';
const apiKey = '&app_id=6faf9cc7&app_key=5c9b29569582527e3c87130f130cb58d';

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    query: '',
    results: []
    }
  this.handleInput = this.handleInput.bind(this);
  this.findAndReplace = this.findAndReplace.bind(this);
  this.getInfo = this.getInfo.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

  findAndReplace = (string, target, replacement) => {
    for (var i = 0; i < string.length; i++) {
      var s = string.replace(target, replacement);
    };
    return s;
  }

  handleInput = () => {
    this.setState({
      query: this.search.value
    })
    if (this.state.query.length >= 2) {
      (this.getInfo(this.state.query));
    } 
  } 
  /* else if (this.state.query === '') {
      this.setState ({
        results: ['Click on the desired food to add calories', ]
      })
    }  */  
  
   /*
  handleSubmit = () => {
    this.getInfo(this.state.query)
  }

 {
      if (this.state.query.length >= 2) {
        if (this.state.query.length % 2 === 0) {
           (this.getInfo(this.state.query));
        } 
      } 
    }    
  */
   // same as handle input, but using sync await
    // it has to wait until it receives the information to be able to render it
  

  getInfo = (ingredient) => {
  var ing = this.findAndReplace(ingredient, " ", "%20");
    return axios.get(`${apiURL}${ing}${apiKey}`)
    .then(({ data }) => {
        let suggestions= [];
        data.hints.map(e => {
          suggestions.push([e.food.label, e.food.nutrients.ENERC_KCAL]); 
        })
        this.setState({ 
          results: suggestions
        })
      })
    .catch(err => console.error(err))
  }
  
  addtoCals = (calsToAdd) => {
     this.props.postData("/userInfo", {
      calories_eaten: calsToAdd
    })
    .then (this.props.getAllCals())
  }

  handleClick = (index) => {
    let cals =  Math.floor(this.state.results[index][1]);
    alert(cals + " calories added!");
    this.addtoCals(cals)
  }


 render() {
   return (
     <div>
     <form>
       <input
         placeholder="Enter food item..."
         ref={input => this.search = input}
         onChange={this.handleInput}
       />         
     </form>
        <Hints results={this.state.results} handleClick={this.handleClick}/>
     </div>
   )
 }
}

export default FoodSearch;