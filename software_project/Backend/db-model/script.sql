create table Usuario (
  ID_USUARIO serial PRIMARY KEY not null,
  usuario varchar(50) not null,
  correo varchar(50) not null,
  clave varchar(50) not null,
  telefono bigint not null,
  direccion varchar(50),
  UNIQUE(ID_USUARIO)
);
create table Categorias(
  ID_CATEGORIA integer PRIMARY KEY not null,
  nombre varchar(50),
  UNIQUE (ID_CATEGORIA)
);
create table Productos (
  ID_PRODUCTO serial PRIMARY KEY not null,
  imagen varchar(100) not null,
  nombre varchar(50) not null,
  ID_CATEGORIA integer not null,
  marca varchar(50) not null,
  descripcion text not null,
  precio integer not null,
  stock integer not null,
  UNIQUE(ID_PRODUCTO),
  CONSTRAINT fk_categoria FOREIGN KEY(ID_CATEGORIA) REFERENCES Categorias(ID_CATEGORIA)
);
create table Venta (
  ID_VENTA serial PRIMARY KEY not null,
  ID_USUARIO serial not null,
  fecha timestamp,
  CONSTRAINT fk_usuario FOREIGN KEY(ID_USUARIO) REFERENCES Usuario(ID_USUARIO)
);
create table DetalleVenta(
  ID_DETALLEVENTA serial PRIMARY KEY not null,
  ID_VENTA integer not null,
  ID_PRODUCTO integer not null,
  fecha timestamp,
  cantidad integer not null,
  subtotal integer not null,
  precio integer not null,
  CONSTRAINT fk_venta FOREIGN KEY (ID_VENTA) REFERENCES Venta(ID_VENTA),
  CONSTRAINT fk_producto FOREIGN KEY (ID_PRODUCTO) REFERENCES Productos(ID_PRODUCTO)
);

CREATE TABLE Consultas(
    id SERIAL PRIMARY KEY,
    correo VARCHAR(50) NOT NULL,
    estado BOOLEAN,
    titulo VARCHAR,
    descripcion VARCHAR,
    respuesta VARCHAR,
    CONSTRAINT fk_usuario
        FOREIGN KEY (correo)
        REFERENCES Usuario(correo)
);