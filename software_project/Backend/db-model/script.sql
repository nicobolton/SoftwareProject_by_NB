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
  imagen bytea not null,
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
create table Consultas(
  ID_CONSULTAS serial PRIMARY KEY not null,
  correo varchar(50) not null,
  estado boolean,
  titulo varchar(50) not null,
  descripcion varchar(100) not null,
  respuesta varchar(50) not null
);