CREATE DATABASE Curso;
USE Curso;

CREATE TABLE documento(
	doc_ID int(11) PRIMARY KEY AUTO_INCREMENT,
    doc_Descripcion varchar(50) NOT NULL,
    doc_DescripcionCorta varchar(4) NOT NULL
);
CREATE TABLE alumnos(
	alumno_ID int(11) PRIMARY KEY AUTO_INCREMENT,
    alumno_Nombre varchar(50) not null,
    alumno_Apellido varchar(50) not null,
    alumno_NroDoc int(8) not null,
    alumno_TipoDoc int(11) not null,
   	FOREIGN KEY (alumno_TipoDoc) REFERENCES documento(doc_ID) ON UPDATE CASCADE ON DELETE CASCADE 
	
);
CREATE TABLE estado_inscripcion (
	Estado_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	Estado VARCHAR (50)
);
CREATE TABLE inscripcion(
	ins_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    alumno_ID int NOT null,
    observacion varchar(140),
    ID_estado int NOT null,
    FOREIGN KEY (alumno_ID) REFERENCES alumnos(alumno_ID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (ID_estado) REFERENCES estado_inscripcion(Estado_ID) ON UPDATE CASCADE ON DELETE CASCADE 

);
CREATE TABLE horario (
	horario_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	horario_turno VARCHAR (10),
	horario_rango VARCHAR (20) 
);
CREATE TABLE curso (
	curso_ID int NOT null PRIMARY KEY AUTO_INCREMENT,
    curso_Nombre varchar(50) NOT null UNIQUE,
    curso_aula tinyint(3),
    curso_docente tinyint(3),
	ID_horario int NOT null,
	FOREIGN KEY (curso_ID) REFERENCES inscripcion(curso_ID) ON UPDATE CASCADE ON DELETE CASCADE 

);




ALTER TABLE alumnos ADD UNIQUE(alumno_NroDoc, alumno_TipoDoc);

ALTER TABLE inscripcion
ADD CONSTRAINT fk_inscripcion_alumnos FOREIGN KEY (alumno_ID) REFERENCES alumnos(alumno_Id);

ALTER TABLE inscripcion
ADD CONSTRAINT fk_inscripcion_curso FOREIGN KEY (curso_Id) REFERENCES curso(curso_Id);

ALTER TABLE insscripcion
ADD CONSTRAINT fk_alumno_horario FOREIGN KEY (curso_Id) REFERENCES horario(id);

ALTER TABLE insscripcion
ADD CONSTRAINT fk_alumno_estado FOREIGN KEY (curso_Id) REFERENCES estado(id);
/*CARGA DE DATOS*/

INSERT INTO usuario(Usuario_ID,Usuario_nombre,Usuario_apellido,Usuario_edad,Usuario_fecha,Usuario_provincia) VALUES
	(1, "Jose", "Ramirez", 24, "1999-02-23", "Cordoba"),
   	(2, "Carlos", "Vidal", 22, "2001-01-26", "Buenos Aires"),
   	(3, "John", "Smith", 32, "1991-07-11", "Neuquen"),
   	(4, "Sarah", "Robinson", 37, "1986-05-12", "Salta"),
   	(5, "Brandom", "Johnson", 23, "2000-05-22", "Chubut");

INSERT INTO documento(doc_ID, doc_Descripcion, doc_DescripcionCorta) VALUES 
	(1, "Documento Nacional De Identidad", "DNI"),
	(2, "Pasaporte", "PAS"),
	(3, "Libreta de Enrolamiento", "LE"),
	(4, "Libreta civica", "LC"),
	(5, "Cedula de Identidad de Capital Federal", "CI");

INSERT INTO alumnos(alumno_Nombre, alumno_Apellido, alumno_NroDoc, alumno_TipoDoc) VALUES 
	("Lucas", "Boccaccini", 43466329, 1);

INSERT INTO curso(curso_Nombre, curso_aula) values 
	('Analisis Matematico', 1),
	('Algebra', 2),
	('Fisica', 3);

INSERT INTO horario	(turno, rango) VALUES 
    ('mañana', '08:00-12:00' ),
    ('tarde', '13:00-17:00'),
    ('noche','19:00-23:00' );

INSERT INTO estado_inscripcion(estado) VALUES 
    ('pre-inscripto'),
    ('observado'),
    ('rechazado'),
    ('aprobado');

--CARLOS 5-6-23
--23069
/*crear una tabla desde comandos slq*/
CREATE TABLE curso (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL UNIQUE,
	aula INT
);

/*insertar datos en la tabla*/
INSERT INTO curso (nombre,aula) VALUES
('analisis matematico 1',1),
('algebra 1',2),
('fisica 1',3),
('algebra 2',4);


CREATE TABLE inscripcion (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	alumno_id INT NOT NULL,
	curso_id INT  NOT NULL,
	horario_id INT NOT NULL,
	observacion VARCHAR(140),
	estado_id INT NOT null
);

/*constraint fk, unique*/
ALTER TABLE inscripcion 
ADD CONSTRAINT fk_inscripcion_alumnos FOREIGN KEY (alumno_id)
REFERENCES alumnos (id);

ALTER TABLE inscripcion 
ADD CONSTRAINT fk_inscripcion_curso FOREIGN KEY (curso_id)
REFERENCES curso (id);

CREATE TABLE horario (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	turno VARCHAR (10),
	rango VARCHAR (20) 
);
INSERT INTO horario	(turno, rango) VALUES ('mañana', '08:00-12:00' );
INSERT INTO horario	(turno, rango) VALUES ('tarde', '13:00-17:00');
INSERT INTO horario	(turno, rango) VALUES ('noche','19:00-23:00' );

ALTER TABLE inscripcion 
ADD CONSTRAINT fk_inscripcion_horario FOREIGN KEY (horario_id)
REFERENCES horario (id);

CREATE TABLE estado_inscripcion (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	estado VARCHAR (50)
);
INSERT INTO estado_inscripcion(estado) VALUES ('pre-inscripto');
INSERT INTO estado_inscripcion(estado) VALUES ('observado');
INSERT INTO estado_inscripcion(estado) VALUES ('rechazado');
INSERT INTO estado_inscripcion(estado) VALUES ('aprobado');

ALTER TABLE inscripcion 
ADD CONSTRAINT fk_inscripcion_estado FOREIGN KEY (estado_id)
REFERENCES estado_inscripcion (id);

ALTER TABLE inscripcion ADD CONSTRAINT uq_inscripcion_alumno UNIQUE (alumno_id,curso_id,horario_id);


//
