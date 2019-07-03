
DROP DATABASE IF EXISTS calories;

CREATE DATABASE calories;

USE calories;

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  weight INT NOT NULL,
  height FLOAT(3, 2) NOT NULL,
  gender ENUM("male", "female"),
  BMI FLOAT(3, 1) NOT NULL,
  calories_needed INT NOT NULL,
  calories_eaten INT DEFAULT 0
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.
 *
 */

 INSERT INTO userInfo (name, weight, height, gender, BMI, calories_needed, calories_eaten) 
               VALUES ("Yidah", 58, 1.55, "female", 32.3, 2000, 0);
 INSERT INTO userInfo (name, weight, height, gender, BMI, calories_needed, calories_eaten) 
               VALUES ("Carlos", 70, 1.6, "male", 32.3, 2500, 0);


 /*
*  the date can be rendered as a proper date using the following function:
*  function formatDate(date) {
*  var datestamp = new Date(date);
*  return datestamp.toDateString()
* }
* example when mapping---> info.map(e => ( <p>{formatDate(e.date)}</p> ))
*
*/