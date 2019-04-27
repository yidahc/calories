import React, { Component } from 'react'
import axios from 'axios'

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
  }
    
  findAndReplace = (string, target, replacement) => {
    for (var i = 0; i < string.length; i++) {
      var s = string.replace(target, replacement);
    };
    return s;
  }

  handleInput= () => {
    this.setState({
      query: this.search.value
    });
    if (this.state.query.length >= 2) {
    this.getInfo(this.state.query);
    }
  }

  getInfo = (ingredient) => {
  var ing = this.findAndReplace(ingredient, " ", "%20");
    axios.get(`${apiURL}${ing}${apiKey}`)
    .then(({ data }) => {
        data.hints.map(e => this.state.results.push(e.food.label))
      }) 
  }


 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInput}
       />
       <p>{this.state.results}</p>
     </form>
   )
 }
}

export default FoodSearch