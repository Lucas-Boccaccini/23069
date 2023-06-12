CREATE DATABASE curso;
USE curso;

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
CREATE TABLE horario (
	horario_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	horario_turno VARCHAR (10),
	horario_rango VARCHAR (20) 
);
CREATE TABLE curso (
	curso_ID int NOT null PRIMARY KEY AUTO_INCREMENT,
    curso_Nombre varchar(50) NOT null UNIQUE,
    curso_aula int(3) not null,
    curso_docente varchar(50) not null,
    ID_horario int(10) not null, 
    FOREIGN KEY (ID_horario) REFERENCES horario(horario_ID) ON UPDATE CASCADE ON DELETE CASCADE 
);
CREATE TABLE inscripcion(
	ins_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ID_alumno int NOT null,
    observacion varchar(140),
    ID_estado int NOT null,
    ID_curso int NOT null,
    FOREIGN KEY (ID_alumno) REFERENCES alumnos(alumno_ID) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (ID_estado) REFERENCES estado_inscripcion(Estado_ID) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (ID_curso) REFERENCES curso(curso_ID) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO documento(doc_Descripcion, doc_DescripcionCorta) VALUES 
	("Documento Nacional De Identidad", "DNI"),
	("Pasaporte", "PAS"),
	("Libreta de Enrolamiento", "LE"),
	("Libreta civica", "LC"),
	("Cedula de Identidad de Capital Federal", "CI");

INSERT INTO alumnos(alumno_Nombre, alumno_Apellido, alumno_NroDoc, alumno_TipoDoc) VALUES 
	("Lucas", "Boccaccini", 43466329, 1);

INSERT INTO horario	(horario_turno, horario_rango) VALUES 
    ('mañana', '08:00-12:00' ),
    ('tarde', '13:00-17:00'),
    ('noche','19:00-23:00' );

INSERT INTO curso(curso_Nombre, curso_aula, curso_docente, ID_horario) VALUES 
	('Analisis Matematico', 1, "Pedro Perez", 1),
	('Algebra', 2, "Susana Gomez", 2),
	('Fisica', 3, "Juan Perez", 3);

INSERT INTO estado_inscripcion(estado) VALUES 
    ('pre-inscripto'),
    ('observado'),
    ('rechazado'),
    ('aprobado');

INSERT INTO inscripcion (ID_alumno, observacion, ID_estado, ID_curso) VALUES
    (1, "inscripto correctamente a Algebra", 4, 2),
    (1, "rechazado en Analisis Matematico", 3, 1),
    (1, "pre-inscripto a Fisica", 1, 3);

