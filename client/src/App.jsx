import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';

import BMI from './components/BMI.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import TotalCalories from './components/TotalCalories.jsx';

import { BrowserRouter, Route, Switch} from 'react-router-dom';









class App extends Component {
  render() {
    return (
    	<BrowserRouter>
		  <div>
		    <Switch>
		    <Route exact path="/" component={Home}/>
		    <Route exact path="/BMI" component={BMI}/>
		    <Route exact path="/TotalCalories" component={TotalCalories}/>
		    </Switch>
    	  </div>
    	</BrowserRouter>
    );
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
