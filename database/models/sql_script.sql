Create schema tienda_de_musica;
use tienda_de_musica;

CREATE TABLE users (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100),
password CHAR(60),
address VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP NULL
); 

CREATE TABLE categories (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
category_name VARCHAR(50)

);

CREATE TABLE products (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
product_description VARCHAR(600),
category VARCHAR(50),
price DECIMAL(10, 2),
product_image VARCHAR(250),
stock INT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP NULL
);

CREATE TABLE carts (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT,
user_first_name VARCHAR(100),
shipping_address VARCHAR (100),
product_id INT,
quantity INT,
cart_date DATETIME,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);


select * from products
