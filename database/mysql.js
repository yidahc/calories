// If using MySQL, install mysql2 package with npm install -S mysql2
// mysql2 npm package has support for Promises
const mysql = require('mysql2')

// change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'calories'
}

const connection = mysql.createConnection(config)

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack)
  }
})

module.exports.getMyData = cb => {
  connection.query('SELECT * from userInfo', (error, results) => {
    if (error) {
      throw error
    } else {
      console.log('this is from mysql query', results)
      cb(results)
    }
  })
}

module.exports.postMyData = function (name, weight, height, gender, BMI, calories_needed, cb) {
  connection.query(
    'INSERT INTO userInfo (name, weight, height, gender, BMI, calories_needed) VALUES (?, ?, ?, ?, ?, ?);',
    [name, weight, height, gender, BMI, calories_needed],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        cb(results)
      }
    }
  )
}

module.exports.postMyDataCaloriesEaten = function (calories_eaten, cb) {
  connection.query(
    'INSERT INTO userInfo (calories_eaten) VALUES (?);',
    [calories_eaten],
    (error, results) => {
      if (error) {
        cb(error)
      } else {
        cb(results)
      }
    }
  )
}

module.exports.getMyCaloriesNeeded = cb => {
  connection.query('SELECT calories_needed FROM userInfo ORDER BY id DESC LIMIT 1', (error, resultsCaloriesNeeded) => {
    if (error) {
      throw error
    } else {
      console.log('this is from mysql query', resultsCaloriesNeeded)
      cb(resultsCaloriesNeeded)
    }
  })
}

module.exports.getMyCaloriesEaten = cb => {
  connection.query('SELECT calories_eaten FROM userInfo ORDER BY id DESC LIMIT 1', (error, resultsCaloriesEaten) => {
    if (error) {
      throw error
    } else {
      console.log('this is from mysql query', resultsCaloriesEaten)
      cb(resultsCaloriesEaten)
    }
  })
}
