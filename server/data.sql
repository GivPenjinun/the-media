//CREATE DATABASE the-media

CREATE TABLE writers (
    writer_id VARCHAR(255) PRIMARY KEY NOT NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    image TEXT 
);

CREATE TABLE readers (
    reader_id VARCHAR(255) PRIMARY KEY NOT NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    image TEXT 
);

CREATE TABLE posts (
  post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_by TEXT REFERENCES writers(writer_id) ON DELETE CASCADE,
	category VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  image TEXT
);

CREATE TABLE fav_posts (
    fav_posts_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    reader_id TEXT REFERENCES readers(reader_id) ON DELETE CASCADE ,
    post_id TEXT REFERENCES posts(post_id) ON DELETE CASCADE 
);
