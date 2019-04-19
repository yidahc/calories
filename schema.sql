DROP DATABASE IF EXISTS calories;

CREATE DATABASE calories;

USE calories;

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  weight INT NOT NULL,
  height INT NOT NULL,
  gender ENUM("male", "female"),
  BMI INT NOT NULL,
  calories_needed INT NOT NULL,
  calories_eaten INT NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO userInfo (id, name, weight, height, gender, BMI, calories_needed, calories_eaten) 
               VALUES (null, "Carlos", 120, 60, "male", 20, 2500, 2000);



 /*
* weight is in lbs and height is in inches
*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> formatDate(e.date)
*
*/
