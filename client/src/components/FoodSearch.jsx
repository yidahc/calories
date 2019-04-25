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
      if (this.state.query.length % 2 === 0) {
        this.getInfo(this.state.query);
      } 
    } else if (!this.state.query) {
       }
  }

  getInfo = (ingredient) => {
  var ing = this.findAndReplace(ingredient, " ", "%20");
    axios.get(`${apiURL}${ing}${apiKey}`)
    .then(({ data }) => {
        data.hints.map(e => {
          this.state.results.push(e.food.label); 
          console.log(this.state.results)
        })
      }) 
  }


 render() {
   return (
     <div>
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInput}
       />
     </form>
     <div>
       {this.state.results.map(e => { 
        return(
       <ul>
         <li key={e[i]}>{e}</li>
       </ul>
        )
       })}
     </div>
     </div>
   )
 }
}

export default FoodSearch