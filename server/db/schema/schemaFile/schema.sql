

USE customers; 

CREATE TABLE restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lunch_id INT,
    dinner_id INT,
    dessert_id INT
);

CREATE TABLE lunch (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id)
);

CREATE TABLE dinner (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id)
);

CREATE TABLE dessert (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id)
);