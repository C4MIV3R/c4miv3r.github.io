CREATE DATABASE project_2;
\c project_2
CREATE TABLE accounts (id SERIAL PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password_hash VARCHAR(255));
