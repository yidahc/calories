DROP DATABASE IF EXISTS calories;

CREATE DATABASE calories;

USE calories;

CREATE TABLE userInfo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP,
  weight SMALLINT NOT NULL,
  height VARCHAR(20) NOT NULL,
  gender ENUM("male", "female")
  BMI SMALLINT NOT NULL,
  calories_needed SMALLINT NOT NULL,
  calories_eaten SMALLINT 
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO userInfo (name, weight, height, gender, BMI, calories_needed, calories_eaten) VALUES ("Carlos", 75, "5ft / 6inches","male", 2,500, 2,000);