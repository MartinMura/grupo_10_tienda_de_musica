Create schema tienda_de_musica;
use tienda_de_musica;

CREATE TABLE Users (
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

CREATE TABLE Orders (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT,
user_first_name VARCHAR(100),
shipping_address VARCHAR (100),
order_date DATETIME NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Categories (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
category_name VARCHAR(50)

);

CREATE TABLE Product (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
product_description VARCHAR(600),
price DECIMAL(10, 2),
product_image BLOB,
stock INT,
category_id INT,
FOREIGN KEY (category_id) REFERENCES Categories(id),
created_at DATETIME,
updated_at DATETIME,
deleted_at DATETIME
);

CREATE TABLE Order_detail (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_id INT,
order_id INT,
FOREIGN KEY (product_id) REFERENCES Product(id),
FOREIGN KEY (order_id) REFERENCES Orders(id),
created_at DATETIME,
updated_at DATETIME
);

