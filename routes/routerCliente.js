import express from "express";
import {agregarCliente, editarCliente, mostrarCliente, mostrarClientes, eliminarCliente } from "../controllers/controllerCliente";


const routerCliente = express.Router();

routerCliente .post('/', agregarCliente);
routerCliente .put('/:Cedula', editarCliente);
routerCliente .delete('/:Cedula', eliminarCliente);
routerCliente .get('/:Cedula', mostrarCliente);
routerCliente .get('/', mostrarClientes);

export default routerCliente ;
