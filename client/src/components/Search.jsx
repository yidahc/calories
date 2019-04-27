import React, { Component } from 'react';
import Header from './Header.jsx';


const apiURL = 'https://api.edamam.com/api/food-database/parser?ingr=';
const apiKey = '&app_id=6faf9cc7&app_key=5c9b29569582527e3c87130f130cb58d';

 /* `${process.env.REACT_APP_API_KEY}` */

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      hints: '',
      cals: null,
    }
    this.fetchHints = this.fetchHints.bind(this)
    this.findAndReplace = this.findAndReplace.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addToList = this.addToList.bind(this)
    }
    
    
    componentDidMount() {
    //this.fetchHints("green apple")
    console.log(this.fetchHints("green apple"))
    };
/*
renderData() {
 
}
*/
handleInput(e) {
  const { target } = e;
  const { name, value } = target;

  this.setState({
    [name]: value,
  });
}
// handles input for search bar, ,so the input in state is the input in search bar

findAndReplace(string, target, replacement) {
  for (var i = 0; i < string.length; i++) {
    var s = string.replace(target, replacement);
  };
  return s;
}

addToList = hint => {
  console.log("THIS IS THE RESULT" , hint.food.nutrients.ENERC_KCAL)
}

fetchHints = ingredient => {
  var ing = this.findAndReplace(ingredient, " ", "%20");
    const url = `${apiURL}${ing}${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(ingrData => {
      ingrData.hints.map(e => {
      var inputHints = e
      console.log(inputHints)
     this.addToList(inputHints)
        }); 
      })
};

  

handleSubmit(e) {
  e.preventDefault();
  var { input } = this.state;
  fetchHints(input)
 /* this.props.postData("/userInfo", {
    name: name,
    weight: weight,
    height: height,
    gender: gender,
    BMI: BMI
  });
*/
  this.setState({
    input: '',
  });
}

  render() 
  {
    const { input } = this.state;
    
    return (
        <div>
        <Header />
        <form>
        <input 
          type="text" 
          className="input" 
          placeholder="Search..." 
          name="input"
          value={input}
          onChange={this.handleInput}
        />
         <button className="button is-info" onClick={this.addItem}>
          Add Item
        </button>
        </form>
        <div className="content">
          <div className="container">
            <section className="section">
              <ul>
                <li>stuff</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
    }
  }
export default FoodSearch;