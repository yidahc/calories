import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'

class TotalCalories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      calories_needed: ''
    }
    this.getDataCaloriesNeeded = this.getDataCaloriesNeeded.bind(this)
  }

  componentDidMount () {
    this.getDataCaloriesNeeded('/calneed')
  }

  getDataCaloriesNeeded (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(dataCaloriesNeeded => {
        this.setState({
          calories_needed: dataCaloriesNeeded
        })
        console.log('this is the data', dataCaloriesNeeded)
      })
      .catch(err => console.error(err))
  }

  render () {
    const { calories_needed } = this.state
    var obj = calories_needed[0]
    var int
    for (var i in obj) {
      if (i === 'calories_needed') {
        int = obj[i]
      }
    }
    return (
      <div>
        <Header />
        <h1>Calories Needed: {int}</h1>
      </div>
    )
  }
}

export default TotalCalories
