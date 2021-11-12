Create schema tienda_de_musica;
use tienda_de_musica;

CREATE TABLE users (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100),
password CHAR(60),
address VARCHAR(100),
created_at DATETIME,
updated_at DATETIME,
deleted_at DATETIME
); 

CREATE TABLE categories (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
category_name VARCHAR(50)

);

CREATE TABLE products (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
product_description VARCHAR(600),
price DECIMAL(10, 2),
product_image BLOB,
stock INT,
category_id INT,
FOREIGN KEY (category_id) REFERENCES categories(id),
created_at DATETIME,
updated_at DATETIME,
deleted_at DATETIME
);

CREATE TABLE carts (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT,
user_first_name VARCHAR(100),
shipping_address VARCHAR (100),
product_id INT,
quantity INT,
cart_date DATETIME NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);


