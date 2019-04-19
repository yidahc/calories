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
  BMI  FLOAT(3,1) DEFAULT 20.5 NOT NULL,
  calories_needed INT DEFAULT 2500 NOT NULL,
  calories_eaten INT
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO userInfo (name, weight, height, gender) 
               VALUES ("Yidah", 120, 60, "female");



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
