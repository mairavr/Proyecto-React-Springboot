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
SELECT * FROM categoria;

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
SELECT * FROM producto;

-- ================================================
-- CLIENTES
-- ================================================
INSERT INTO cliente (nombre, correo, telefono) VALUES
("Juan Pérez", "juan.perez@opticamiroo.cl", "+56912345678"),
("María González", "maria.gonzalez@opticamiroo.cl", "+56987654321"),
("Pedro Torres", "pedro.torres@opticamiroo.cl", "+56911223344"),
("Ana Fernández", "ana.fernandez@opticamiroo.cl", "+56922334455"),
("Luis Ramírez", "luis.ramirez@opticamiroo.cl", "+56933445566"),
("Carla Soto", "carla.soto@opticamiroo.cl", "+56944556677"),
("Diego Morales", "diego.morales@opticamiroo.cl", "+56955667788"),
("Paula Rojas", "paula.rojas@opticamiroo.cl", "+56966778899"),
("Jorge Herrera", "jorge.herrera@opticamiroo.cl", "+56977889900"),
("Valentina Castillo", "valentina.castillo@opticamiroo.cl", "+56988990011"),
("Santiago Varela", "santiago.varela@opticamiroo.cl", "+56999001122"),
("Isabel Navarro", "isabel.navarro@opticamiroo.cl", "+56910111213"),
("Tomás Aguilar", "tomas.aguilar@opticamiroo.cl", "+56911121314"),
("Fernanda Paredes", "fernanda.paredes@opticamiroo.cl", "+56912131415"),
("Andrés Molina", "andres.molina@opticamiroo.cl", "+56913141516"),
("Camila Riquelme", "camila.riquelme@opticamiroo.cl", "+56914151617"),
("Martín Fuentes", "martin.fuentes@opticamiroo.cl", "+56915161718"),
("Natalia Sepúlveda", "natalia.sepulveda@opticamiroo.cl", "+56916171819");
SELECT * FROM cliente;

-- ================================================
-- EMPLEADOS
-- ================================================
INSERT INTO empleado (nombre, cargo, correo, contraseña) VALUES
("Ana Torres", "Vendedora", "ana.torres@opticamiroo.cl","atorres12345"),
("Carlos Muñoz", "Administrador", "carlos.munoz@opticamiroo.cl","cmunozmiroo123"),
("Sofía Rivas", "Optometrista", "sofia.rivas@opticamiroo.cl","srivas12345"),
("Patricia Salazar", "Vendedora", "patricia.salazar@opticamiroo.cl", "psalazar123"),
("Ricardo Aguirre", "Optometrista", "ricardo.aguirre@opticamiroo.cl", "raguirre123"),
("Lorena Medina", "Vendedora", "lorena.medina@opticamiroo.cl", "lmedina123"),
("Fernando Pizarro", "Vendedora", "fernando.pizarro@opticamiroo.cl", "fpizarro123"),
("Claudia Araya", "Vendedora", "claudia.araya@opticamiroo.cl", "caraya123"),
("Javier Espinoza", "Optometrista", "javier.espinoza@opticamiroo.cl", "jespinoza123"),
("Verónica Castillo", "Vendedora", "veronica.castillo@opticamiroo.cl", "vcastillo123"),
("Diego Olivares", "Vendedora", "diego.olivares@opticamiroo.cl", "dolivares123"),
("Carolina Rojas", "Optometrista", "carolina.rojas@opticamiroo.cl", "crojas123"),
("Matías Fernández", "Vendedor", "matias.fernandez@opticamiroo.cl", "mfernandez123");
SELECT * FROM empleado;

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
SELECT * FROM proveedor;

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
SELECT * FROM venta;

