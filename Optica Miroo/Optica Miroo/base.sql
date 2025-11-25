USE base;

-- ================================================
-- CATEGORÍAS
-- ================================================
INSERT INTO categoria (nombre) VALUES ("Lentes de Sol");
INSERT INTO categoria (nombre) VALUES ("Lentes Ópticos");
INSERT INTO categoria (nombre) VALUES ("Accesorios");
INSERT INTO categoria (nombre) VALUES ("Lentes de Sol Deportivos");
INSERT INTO categoria (nombre) VALUES ("Lentes de Lectura");
INSERT INTO categoria (nombre) VALUES ("Gafas de Seguridad");
INSERT INTO categoria (nombre) VALUES ("Gafas de Computación");
INSERT INTO categoria (nombre) VALUES ("Lentes de Contacto Diarios");
INSERT INTO categoria (nombre) VALUES ("Lentes de Contacto Mensuales");
INSERT INTO categoria (nombre) VALUES ("Monturas Premium");
INSERT INTO categoria (nombre) VALUES ("Accesorios de Limpieza");
INSERT INTO categoria (nombre) VALUES ("Estuches y Fundas");
INSERT INTO categoria (nombre) VALUES ("Paños y Soluciones de Limpieza");

-- ================================================
-- PRODUCTOS
-- ================================================
INSERT INTO producto (activo, descripcion, nombre, precio, categoria_id, imagen) VALUES 
(TRUE, "Lentes de sol polarizados con protección UV400", "Ray-Ban Aviator", 79990, 1, 'ray-ban-aviator.webp'),
(TRUE, "Lentes deportivos Oakley con marco negro", "Oakley Frogskins", 69990, 1, 'oakley-frogskins.jpg'),
(TRUE, "Lentes ópticos con marco metálico dorado", "Marco Metálico Clásico", 49990, 2, 'marco-metalico-clasico.webp'),
(TRUE, "Estuche rígido premium para lentes", "Estuche Premium", 15990, 3, 'estuche-premium.webp'),
(TRUE, "Lentes de sol con marco rojo y protección UV400", "SunRed", 59990, 1, "sunred.jpg"),
(TRUE, "Lentes deportivos con diseño moderno y marco negro", "Sporty Black", 74990, 1, "sportyblack.jpg"),
(TRUE, "Lentes ópticos clásicos con marco azul", "Clásico Azul", 49990, 2, "clasicoazul.jpg"),
(TRUE, "Lentes ópticos modernos con marco transparente", "Moderno Clear", 52990, 2, "modernoclear.jpg"),
(TRUE, "Estuche rígido elegante para lentes", "Estuche Elegante", 15990, 3, "estucheelegante.webp"),
(TRUE, "Paño de limpieza premium para lentes", "Paño Premium", 4990, 3, "pano.webp"),
(TRUE, "Soporte de lentes de sol para auto", "Soporte Auto", 7990, 3, "soporteauto.webp"),
(TRUE, "Lentes de sol con marco dorado y lentes polarizadas", "Golden Polar", 89990, 1, "goldenpolar.jpg");

-- ================================================
-- CLIENTES
-- ================================================
INSERT INTO cliente (nombre, correo, telefono, contrasena) VALUES
("Juan Pérez", "juan.perez@opticamiroo.cl", "+56912345678", "$2a$10$GBC9XRDncIYhBGHtpM5hZuI7.StYGAeCpyRAr8X2RK7FMw5mZkrG6"),
("María González", "maria.gonzalez@opticamiroo.cl", "+56987654321", "$2a$10$VDA9Als/vB93TYqUY7UwmebwfyQhkOmI3lPME4bpcJQPtbQeZAcve"),
("Pedro Torres", "pedro.torres@opticamiroo.cl", "+56911223344", "$2a$10$ONRhNFbgKWVE.NFSe4F11.znaSLHIHvDKbxtunkfJedN6ykqTJUB2"),
("Ana Fernández", "ana.fernandez@opticamiroo.cl", "+56922334455", "$2a$10$qAXet1bt0ZQqtXWydEEozOL5eBpBLppBmTKd/PNGZa2tq17Mzx6JC"),
("Luis Ramírez", "luis.ramirez@opticamiroo.cl", "+56933445566", "$2a$10$yE0CH/fHXK8JO0hfpi5MBerk26Thb90rYsGKmghlXl9eQEjUarM2m"),
("Carla Soto", "carla.soto@opticamiroo.cl", "+56944556677", "$2a$10$7wwHZOsJp9E3aycq3f3LEeKmJCS3L4D3EU51kjee72wCcPdF8c.jS"),
("Diego Morales", "diego.morales@opticamiroo.cl", "+56955667788", "$2a$10$5JChciGdpRLbb5N7hJaUQeVKemLLJ9nCQpJlXUroBVYB9D28AMg4i"),
("Paula Rojas", "paula.rojas@opticamiroo.cl", "+56966778899", "$2a$10$ZUg.MblV.pU4HBru1u7SGeu8tyja5bldkm1Gvimdkcw759SRmAJyq"),
("Jorge Herrera", "jorge.herrera@opticamiroo.cl", "+56977889900", "$2a$10$ZlzhkIfaVPkqRANg3e/yTeGb0gMlfBzBaNE0UyjOoZ8TculOsT3eG"),
("Valentina Castillo", "valentina.castillo@opticamiroo.cl", "+56988990011", "$2a$10$Gh4u/z531.OfzwioZoeZsuA9MjXHyp6Cestv3I7WcVChhx0s8Hlu2"),
("Santiago Varela", "santiago.varela@opticamiroo.cl", "+56999001122", "$2a$10$Eh1lUelbRAloU8T0mt8FW.hvOkpBFXrj4ecECDPGtGzMvdr.thshi"),
("Isabel Navarro", "isabel.navarro@opticamiroo.cl", "+56910111213", "$2a$10$YdRh77NdQ8/d6ap2MQDT3OIB8vkt8.k7BE6ZFD5y5WtweNnqfIX2O"),
("Tomás Aguilar", "tomas.aguilar@opticamiroo.cl", "+56911121314", "$2a$10$NeXS0QsojThs6RTcBXo3Y.3Qf9GZ69ppscBXPrhY1g0tz28uB.ny."),
("Fernanda Paredes", "fernanda.paredes@opticamiroo.cl", "+56912131415", "$2a$10$4PhL4u9VKycg.81bxyR.puV02kqvrpjzBk6psGFlL5FM89MEf1ytG"),
("Andrés Molina", "andres.molina@opticamiroo.cl", "+56913141516", "$2a$10$Oqc3TecJO0zgPpjyt3yJ3eBT8OZDhgn4RGzbWIXqXAjtmYtgFMZT6"),
("Camila Riquelme", "camila.riquelme@opticamiroo.cl", "+56914151617", "$2a$10$0KC8CDGrxYMQK6VR0o4pIOCcFtWkjwNC5Ky.J49Wl3zhXR2goaux."),
("Martín Fuentes", "martin.fuentes@opticamiroo.cl", "+56915161718", "$2a$10$O2U6FTwPo1os9Fffeo3/4OAvilhpiJz.mxUJCvYyDWs3cpcKYFxtm"),
("Natalia Sepúlveda", "natalia.sepulveda@opticamiroo.cl", "+56916171819", "$2a$10$93eglLS0ZeSFJoT2FPJC3eAM73NUZfGS2COclUzsk/Nu9hiN9Gqxy");

-- juan.perez@opticamiroo.cl → Jperez#2025
-- maria.gonzalez@opticamiroo.cl → Mgonzalez89*
-- pedro.torres@opticamiroo.cl → Ptorres!77
-- ana.fernandez@opticamiroo.cl → Afernandez@66
-- luis.ramirez@opticamiroo.cl → Lramirez$55
-- carla.soto@opticamiroo.cl → Csoto%44
-- diego.morales@opticamiroo.cl → Dmorales&33
-- paula.rojas@opticamiroo.cl → Projas?22
-- jorge.herrera@opticamiroo.cl → Jherrera+11
-- valentina.castillo@opticamiroo.cl → Vcastillo=99
-- santiago.varela@opticamiroo.cl → Svarela^88
-- isabel.navarro@opticamiroo.cl → Inavarro77*
-- tomas.aguilar@opticamiroo.cl → Taguilar#66
-- fernanda.paredes@opticamiroo.cl → Fparedes!55
-- andres.molina@opticamiroo.cl → Amolina@44
-- camila.riquelme@opticamiroo.cl → Criquelme$33
-- martin.fuentes@opticamiroo.cl → Mfuentes%22
-- natalia.sepulveda@opticamiroo.cl → Nsepulveda&11

-- ================================================
-- EMPLEADOS
-- ================================================
INSERT INTO empleado (nombre, cargo, correo, contrasena) VALUES
("Ana Torres", "Vendedora", "ana.torres@opticamiroo.cl", "$2a$10$7NoQlgplcMJdeENfYtXzG.Kk3q1i6YyUzWJzeIMxXmMI///t4iqJ6"),
("Carlos Muñoz", "Administrador", "carlos.munoz@opticamiroo.cl", "$2a$10$fGaPAtqkwDspoct/0tWmEeDIRXUb0fScnjyUK9JABI1TDATz4SN/G"),
("Sofía Rivas", "Optometrista", "sofia.rivas@opticamiroo.cl", "$2a$10$k7LUuyZw/.lrtC.CYR/FVOZ48Kheywzeapx40QiL5f/j0dHahBVqG"),
("Patricia Salazar", "Vendedora", "patricia.salazar@opticamiroo.cl", "$2a$10$mOF3Ed8ZOdu6yH7JtFA4/uJzVAEzzlBATlINe2rI1r/Df1nl1Uvl."),
("Ricardo Aguirre", "Optometrista", "ricardo.aguirre@opticamiroo.cl", "$2a$10$2mbTA7GEGLD2Zf1TikpYGep/wrsIipLhoWnIYDy303dYbQJa4PL1i"),
("Lorena Medina", "Vendedora", "lorena.medina@opticamiroo.cl", "$2a$10$Llflh0aIbz3uaYf5Wk7GFOACBgRHES.4y61ExY5ZyDzRbqftGJabK"),
("Fernando Pizarro", "Vendedor", "fernando.pizarro@opticamiroo.cl", "$2a$10$9imsmEi//e7LMAXK/fBoEu1l1N/3DN.fEfYqsFmwIjHzvuWxa/3Da"),
("Claudia Araya", "Vendedora", "claudia.araya@opticamiroo.cl", "$2a$10$NLwNh8KtVA.O/j/YcxAMheHPI6NoWDh9bVP8oQYPlyl36epsX07ly"),
("Javier Espinoza", "Optometrista", "javier.espinoza@opticamiroo.cl", "$2a$10$oUqODF/sidggVywrj3.jSeh3r533MByfkp3g9JpL1a4HYe8grvgL."),
("Verónica Castillo", "Vendedora", "veronica.castillo@opticamiroo.cl", "$2a$10$9/shjRoaKqsds5DiTH1jPuYOi2XIvx1vYx.27wSB.uVKVy4dzQJm."),
("Diego Olivares", "Vendedor", "diego.olivares@opticamiroo.cl", "$2a$10$Sw1z.6kADhN7p4PqRGoc2eIteK6xWKZujnaheewEnXzm8R1fVQQzK"),
("Carolina Rojas", "Optometrista", "carolina.rojas@opticamiroo.cl", "$2a$10$OYiaOot10pS4FI3Z34UNMuZ2TFkE.pVxk6R0hnfr7BWN3pVPz.xXS"),
("Matías Fernández", "Vendedor", "matias.fernandez@opticamiroo.cl", "$2a$10$6oJG93iWG2EiR./YNVwP0ulWcXmcvllQQw8Xn0ZQ2/GveaYIWSs3S");

-- ana.torres@opticamiroo.cl → atorres12345
-- carlos.munoz@opticamiroo.cl → cmunozmiroo123
-- sofia.rivas@opticamiroo.cl → srivas12345
-- patricia.salazar@opticamiroo.cl → psalazar123
-- ricardo.aguirre@opticamiroo.cl → raguirre123
-- lorena.medina@opticamiroo.cl → lmedina123
-- fernando.pizarro@opticamiroo.cl → fpizarro123
-- claudia.araya@opticamiroo.cl → caraya123
-- javier.espinoza@opticamiroo.cl → jespinoza123
-- veronica.castillo@opticamiroo.cl → vcastillo123
-- diego.olivares@opticamiroo.cl → dolivares123
-- carolina.rojas@opticamiroo.cl → crojas123
-- matias.fernandez@opticamiroo.cl → mfernandez123

-- ================================================
-- PROVEEDORES
-- ================================================
INSERT INTO proveedor (nombre, telefono, email) VALUES
("Ray-Ban Chile", "+56222558899", "contacto@rayban.cl"),
("Oakley Distribuidores", "+56233447788", "ventas@oakley.cl"),
("VisionLab", "+56224446655", "info@visionlab.cl"),
("Luxottica Chile", "+56222334455", "contacto@luxottica.cl"),
("Essilor Distribuidores", "+56223334455", "ventas@essilor.cl"),
("Hoya Vision", "+56224445566", "info@hoya.cl"),
("Safilo Chile", "+56225556677", "contacto@safilo.cl"),
("Zeiss Chile", "+56226667788", "ventas@zeiss.cl"),
("Marchon Eyewear", "+56227778899", "info@marchon.cl"),
("Bausch & Lomb", "+56228889900", "contacto@bauschlomb.cl"),
("GrandVision Chile", "+56229990011", "ventas@grandvision.cl"),
("OpticStore", "+56221001122", "info@opticstore.cl"),
("VisionPro", "+56221112233", "contacto@visionpro.cl");

-- ================================================
-- VENTAS
-- ================================================
INSERT INTO venta (fecha, total, cliente_id) VALUES
("2025-10-20", 79990, 1),
("2025-10-21", 119980, 2),
("2025-10-22", 15990, 3),
("2025-10-23", 45990, 1),
("2025-10-24", 69990, 2),
("2025-10-25", 89990, 3),
("2025-10-26", 109990, 4),
("2025-10-27", 129990, 5),
("2025-10-28", 149990, 6),
("2025-10-29", 179990, 7),
("2025-10-30", 199990, 8),
("2025-10-31", 219990, 9),
("2025-11-01", 239990, 10),
("2025-11-02", 259990, 11),
("2025-11-03", 279990, 12),
("2025-11-04", 299990, 13),
("2025-11-05", 319990, 14),
("2025-11-06", 339990, 15),
("2025-11-07", 359990, 16),
("2025-11-08", 379990, 17),
("2025-11-09", 399990, 18),
("2025-11-10", 419990, 1),
("2025-11-11", 439990, 2),
("2025-11-12", 459990, 3),
("2025-11-13", 479990, 4),
("2025-11-14", 499990, 5),
("2025-11-15", 519990, 6),
("2025-11-16", 539990, 7),
("2025-11-17", 559990, 8),
("2025-11-18", 579990, 9),
("2025-11-19", 599990, 10),
("2025-11-20", 619990, 11),
("2025-11-21", 639990, 12);

-- ================================================
-- NUMERACIÓN DE BOLETAS
-- ================================================
INSERT INTO numeracion_boleta (ultimo_numero) VALUES (0);


-- ================================================
-- BOLETAS GENERADAS
-- ================================================
INSERT INTO boleta (numero_boleta, fecha_emision, subtotal, iva, total, cliente_id) VALUES
(1, NOW(), 79990, 15100.1, 95190.1, 3),
(2, NOW(), 49990, 9498.1, 59488.1, 7),
(3, NOW(), 119980, 22796.2, 142776.2, 12),
(4, NOW(), 15990, 3038.1, 19028.1, 5),
(5, NOW(), 69990, 13298.1, 83288.1, 10),
(6, NOW(), 52990, 10068.1, 63058.1, 1),
(7, NOW(), 15990, 3038.1, 19028.1, 17),
(8, NOW(), 74990, 14248.1, 89238.1, 2),
(9, NOW(), 89990, 17098.1, 107088.1, 14),
(10, NOW(), 15990, 3038.1, 19028.1, 9);

-- ================================================
-- DETALLES DE BOLETAS
-- ================================================
INSERT INTO boleta_detalle (productoId, nombreProducto, cantidad, precioUnitario, totalLinea, boleta_id) VALUES
(1, "Ray-Ban Aviator", 1, 79990, 79990, 1),
(3, "Marco Metálico Clásico", 1, 49990, 49990, 2),
(2, "Oakley Frogskins", 1, 69990, 69990, 3),
(4, "Estuche Premium", 1, 15990, 15990, 4),
(5, "SunRed", 1, 59990, 59990, 5),
(8, "Moderno Clear", 1, 52990, 52990, 6),
(10, "Paño Premium", 1, 4990, 4990, 7),
(6, "Sporty Black", 1, 74990, 74990, 8),
(12, "Golden Polar", 1, 89990, 89990, 9),
(9, "Estuche Elegante", 1, 15990, 15990, 10);
