const app = require('./config.js');

const db = require('../database/mysql.js');


/*
the two arguments that these requests take are 
(name of the table in the database and the function used in your server/index.js
which is the functions your server uses to get and post data to your database) 
*/
//HTTP Requests go here
app.get('/userInfo', getThisData);
app.post('/userInfo', postThisData);


function getThisData (request, response) {
  db.getMyData(data => {
    response
      .status(200)
      .send(data)
      .end();
  });
};


function postThisData (request, response) {
  const { name, weight, height, gender } = request.body;
  db.postMyData(name, weight, height, gender, (res) => {
    response
      .status(200)
      .send(res)
      .end();
  });
};




const port = (process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

