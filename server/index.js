const app = require('./config.js');

const db = require('../database/mysql.js');




exports.getThisData = (request, response) => {
  db.getMyDatamy(data => {
    response
      .status(200)
      .send(data)
      .end();
  });
};


exports.postThisData = (request, response) => {
  const { name, weight, height, gender, } = request.body;
  db.postMyData(name, weight, height, gender, res => {
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

