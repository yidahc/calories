import React, { Component } from 'react'
import axios from 'axios'

const apiURL = 'https://api.edamam.com/api/food-database/parser?ingr=';
const apiKey = '&app_id=6faf9cc7&app_key=5c9b29569582527e3c87130f130cb58d';


class FoodSearch extends Component {
 state = {
   query: '',
   results: []
  }

  handleInput= () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.getInfo(this.state.query)
      } 
    })
  }

 getInfo = () => {
  var ing = this.findAndReplace(ingredient, " ", "%20");
    axios.get(`${apiURL}${ing}${apiKey}`)
    .then(data => {
      data.hints.map(e => {
        this.setState({
        results: e.food.label
        })
        console.log(e.food.label)
      }); 
      })
};


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