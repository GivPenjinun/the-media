//CREATE DATABASE the-media

CREATE TABLE writers (
    writer_id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    image TEXT 
);

CREATE TABLE readers (
    reader_id VARCHAR(255) PRIMARY KEY NOT UNIQUE NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    image TEXT 
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_by VARCHAR(255) REFERENCES writers(writer_id) ON DELETE CASCADE,
	category VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE fav_posts (
    fav_posts_id SERIAL PRIMARY KEY,
    reader_id VARCHAR(255) REFERENCES readers(reader_id) ON DELETE CASCADE,
    post_id SERIAL REFERENCES posts(post_id) ON DELETE CASCADE 
);
