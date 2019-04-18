// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Holacode',
  database: 'calories',
};

const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});


exports.getMyData = cb => {
  connection.query('SELECT * from userInfo', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(results);
    }
  });
};

exports.postMyData = (name, weight, height, gender, cb) => {
  connection.query(
    'INSERT INTO userInfo (name, weight, height, gender,) VALUES (?, ?, ?, ?);',
    [name, weight, height, gender],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};






/*
//Example mysql query using Promises
const sampleQuery = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM table', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};


module.exports = {
  sampleQuery,
};

*/