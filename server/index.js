const app = require('./config.js')

const db = require('../database/mysql.js')

/*
the two arguments that these requests take are
(name of the table in the database and the function used in your server/index.js
which is the functions your server uses to get and post data to your database)
*/
// HTTP Requests go here
app.get('/userInfo', getThisData)
app.post('/userInfo', postThisData)
app.post('/userInfoCaloriesEaten', postThisDataCaloriesEaten)
app.get('/calneed', getDataCaloriesNeeded)
app.get('/caleat', getDataCaloriesEaten)

function getThisData (request, response) {
  db.getMyData(data => {
    response
      .status(200)
      .send(data)
      .end()
  })
};

function postThisData (request, response) {
  const { name, weight, height, gender, BMI, calories_needed } = request.body
  db.postMyData(name, weight, height, gender, BMI, calories_needed, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

function postThisDataCaloriesEaten (request, response) {
  const { calories_eaten } = request.body
  db.postMyDataCaloriesEaten(calories_eaten, (res) => {
    response
      .status(200)
      .send(res)
      .end()
  })
};

function getDataCaloriesNeeded (request, response) {
  db.getMyCaloriesNeeded(dataCaloriesNeeded => {
    console.log(dataCaloriesNeeded)
    response
      .status(200)
      .send(dataCaloriesNeeded)
      .end()
  })
};

function getDataCaloriesEaten (request, response) {
  db.getMyCaloriesEaten(dataCaloriesEaten => {
    console.log(dataCaloriesEaten)
    response
      .status(200)
      .send(dataCaloriesEaten)
      .end()
  })
};

const port = (process.env.PORT || 3000)

app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})
