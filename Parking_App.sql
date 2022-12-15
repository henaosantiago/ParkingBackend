create database Parking_App;
use Parking_App;

create table Cliente (
Cedula varchar (10) primary key not null,
Nombre varchar (120) not null,
Apellido varchar (120) not null,
Fecha_De_Nacimiento date not null,
Sexo char not null,
Email varchar (400) not null,
Direccion varchar (400) not null,
Telefono varchar (10) not null
);

create table Vehiculo (
Placa_Vehiculo varchar (6) not null,
Cedula varchar (10) not null,
Tipo_De_Vehiculo varchar (100) not null,
Hora_De_Ingreso time not null,
Fecha_De_Ingreso date not null,
Hora_De_Salida time not null,
Fecha_De_Salida date not null,
constraint FK_Cedula foreign key
(Cedula) references Cliente (Cedula),
primary key (Placa_Vehiculo, Cedula)
);

create table Factura (
Numero_De_Factura varchar (11) primary key not null,
Cedula varchar (10) not null,
Fecha_De_Factura date not null,
constraint FK_Cliente foreign key
(Cedula) references Cliente (Cedula)
);

create table Producto (
Codigo_De_Producto varchar (11) not null,
Nombre_De_Producto varchar (400) not null,
Numero_De_Factura varchar (11) not null,
Fecha_De_Entrada date not null,
Fecha_De_Salida date not null,
Seccion varchar (120) not null,
Valor float not null,
Descripcion varchar (600) not null,
Cantidad int not null,
constraint FK_Factu foreign key
(Numero_De_Factura) references Factura (Numero_De_Factura),
primary key (Numero_De_Factura,Codigo_De_Producto)
);

create table Servicio (
Codigo_De_Servicio varchar (6) not null,
Numero_De_Factura varchar (11) not null,
Nombre_De_Servicio varchar (400) not null,
Fecha_De_Servicio date not null,
Valor_De_Servicio float not null,
Descripcion varchar (600) not null,
constraint FK_Numero_De_Factura_Servicio foreign key
(Numero_De_Factura) references Factura (Numero_De_Factura),
primary key (Numero_De_Factura, Codigo_De_Servicio)
);
