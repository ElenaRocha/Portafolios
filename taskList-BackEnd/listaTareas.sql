CREATE DATABASE IF NOT EXISTS listatareas;

USE listatareas;

CREATE TABLE IF NOT EXISTS tasks(
	id_task INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS users(
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    username TEXT,
    password TEXT
);