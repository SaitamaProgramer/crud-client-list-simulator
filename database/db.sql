-- CREANDO LA BASE DE DATOS
CREATE DATABASE crudtodolist;
-- utilizar base de datos
USE crudtodolist;
--crear tabla

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- show all tables
SHOW TABLES;

-- to decribe the table
DESCRIBE customer;