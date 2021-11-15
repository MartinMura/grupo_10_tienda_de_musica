Create schema tienda_de_musica;
use tienda_de_musica;

CREATE TABLE users (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100),
password CHAR(60),
address VARCHAR(100),
created_at TIMESTAMP,
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
color VARCHAR(100),
price DECIMAL(10, 2),
product_image BLOB,
stock INT,
category_id INT,
FOREIGN KEY (category_id) REFERENCES categories(id),
created_at TIMESTAMP,
updated_at DATETIME,
deleted_at DATETIME
);

CREATE TABLE carts (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT,
product_id INT,
quantity INT,
cart_date DATETIME NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO products (id, product_name, product_description, color, price, stock)
VALUES(DEFAULT, "guitarra electrica", "es una guitarra electrica normal, sacada de la base de datos", "roja", 50000, 20),
(DEFAULT, "Bateria con platillos", "es una bateria normal, sacada de la base de datos", "negra", 100000, 5),
(DEFAULT, "Microfono", "es un microfono normal, sacado de la base de datos", "negro", 8000, 10),
(DEFAULT, "Saxofon", "es saxofon normal, sacado de la base de datos", "dorado", 25000, 3);

select * from products;

delete from products
where id < 10




