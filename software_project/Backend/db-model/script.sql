create table Usuario (
	ID_USUARIO integer PRIMARY KEY,
	usuario varchar(50) not null,
	correo varchar(50) not null,	
	clave varchar(50) not null,
	direccion varchar(50) not null,
	telefono integer not null,
	UNIQUE(ID_USUARIO)
);

create table UsuarioNR(
	nombre varchar (50) not null,
	correo varchar (50) not null,
	telefono integer not null
);

create table Productos (
	ID_PRODUCTO integer PRIMARY KEY,
	nombre varchar(50) not null,
	descripcion varchar(50) not null,	
	precio integer not null,
	sku integer not null,
	categoria varchar (50) not null,
	stock integer	 not null,
	UNIQUE(nombre)
);

create table Venta (
	ID_VENTA integer PRIMARY KEY,
	id_cliente integer not null,
	fecha timestamp
);

create table DetalleVenta(
	ID_DETALLEVENTA integer PRIMARY KEY,
	id_venta integer not null,
	id_producto integer not null,
	fecha timestamp,
	cantidad integer not null,
	subtotal integer not null,
	precio integer not null
);

create table Consultas(
	ID_CONSULTAS integer PRIMARY KEY,
	correo varchar(50) not null,
	estado boolean,
	titulo varchar(50) not null,
	descripcion varchar(100) not null,
	respuesta varchar(50) not null
);
