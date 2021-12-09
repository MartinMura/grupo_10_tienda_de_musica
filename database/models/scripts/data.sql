use tienda_de_musica;

insert into users (first_name, last_name, address, email, password) 
values ('Pate', 'Tibbetts', '3 Sunnyside Court', 'ptibbetts0@redcross.org', 'QhWeSa'),
 ('Alwin', 'Warboys', '426 Duke Road', 'awarboys1@xing.com', 'B5lx24AGTYgO'),
 ('Clarita', 'Bowdidge', '3248 Iowa Drive', 'cbowdidge2@msu.edu', 'X2odhFg0wHOl'),
 ('Gearard', 'Kuzma', '8496 4th Way', 'gkuzma3@geocities.jp', 'yO5ilX'),
 ('Giovanni', 'Awcoate', '421 Banding Terrace', 'gawcoate4@qq.com', 'MRzSEsirfR4X'),
 ('Pia', 'Montrose', '3 Esch Park', 'pmontrose5@upenn.edu', 'pErxkrWt0zhv'),
 ('Vlad', 'Simak', '529 Badeau Court', 'vsimak6@msu.edu', 'N10PJJuQV'),
 ('Marcella', 'Vowden', '490 Anthes Park', 'mvowden7@marriott.com', 'RO77sk8wB'),
 ('Allene', 'Daice', '9 Springview Hill', 'adaice8@lulu.com', 'jPiYO2fNHQ8n'),
 ('Sutherlan', 'Batson', '08 Fordem Terrace', 'sbatson9@theguardian.com', '1KbiZabVdziS');


insert into products (product_name, product_description, category, price, product_image, stock)
values ("Guitarra Eléctrica", " Tipo Telecaster Parquer Modelo Richards", "Guitarras", 25491, "https://http2.mlstatic.com/D_NQ_NP_2X_668240-MLA31696979205_082019-F.webp", 30),
("Bateria Mapex Prodigy","Fierros + Platos + Banqueta, modelo PDG5254T, Medidas:B 22, TT 12, TT 13, TF 16, R 14 x5,5", "Percusión", 128439, "https://http2.mlstatic.com/D_NQ_NP_2X_845390-MLA43844397323_102020-F.webp", 3),
("Saxo Alto Eb Stagg", "modelo WSAS215S, acabado Laca con estuche", "Instrumentos de viento", 98313, "https://http2.mlstatic.com/D_NQ_NP_2X_967441-MLA40836409368_022020-F.webp", 9),
("Ac/dc For Those About To Rock", "Album For those about to rock remastered, año de lanzamiento 2004", "CDs", 1700, "https://http2.mlstatic.com/D_NQ_NP_2X_20202-MLA20185400857_102014-F.webp", 10),
("Guitarra eléctrica Yamaha PAC012/100", "Series 012 de caoba black brillante con diapasón de palo de rosa","Guitarras", 43358, "https://http2.mlstatic.com/D_NQ_NP_2X_784985-MLA46346468572_062021-F.webp", 12),
("Pink Floyd The Dark Side Of The Moon", "Pink Floyd Records – PFR8, formato del album: CD ALBUM IND.ARGENTINA, lanzamiento 2016", "CDs", 2500, "https://http2.mlstatic.com/D_NQ_NP_2X_798659-MLA47276013647_082021-F.webp", 10 ),
("Baquetas Stagg", "Palillos Baquetas marca Stagg 5a 5b Bateria Madera Sm5a Sm5b", "Percusión", 371.70, "https://http2.mlstatic.com/D_NQ_NP_2X_848043-MLA46197090197_052021-F.webp", 23),
("Microfono Dinamico Parquer", "Modelo Sn57b Profesional + Funda Cable", "Microfonos", 2189.99, "https://http2.mlstatic.com/D_NQ_NP_2X_972877-MLA47411526151_092021-F.webp", 7 ),
("Harry Styles Fine Line", "Vinilo Doble 180 G", "Vinilos", 8790, "https://http2.mlstatic.com/D_NQ_NP_2X_761311-MLA43741004580_102020-F.webp", 5),
("Guitarra electroacústica Cort Standard", "modelo AF510E black satin", "Guitarras", 40060.78, "https://http2.mlstatic.com/D_NQ_NP_2X_988700-MLA42167912468_062020-F.webp", 4);

UPDATE products
SET category = "Guitarras"
WHERE id = 1;




select * from users;
select * from products;