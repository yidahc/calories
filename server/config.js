const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');

const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));





/*
the two arguments that these requests take are 
(name of the table in the database and the function used in your server/index.js
which is the functions your server uses to get and post data to your database) 
*/
//HTTP Requests go here

/*
app.get('/userInfo', routes.getBMIData);
app.post('/userInfo', routes.postBMIData);
*/


// export my app instance
module.exports = app;
