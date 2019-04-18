DROP DATABASE IF EXISTS calories;

CREATE DATABASE calories;

USE calories;

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  weight VARCHAR(20) NOT NULL
  height VARCHAR(20) NOT NULL
  gender ENUM("male", "female")
  BMI INT NOT NULL,
  calories_needed INT NOT NULL,
  calories_eaten INT 
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO userInfo (name, weight, height, gender, BMI, calories) VALUES ("Carlos", );