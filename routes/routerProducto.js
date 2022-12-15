import express from 'express'
import { agregarProducto, eliminarProducto, mostrarProducto, mostrarProductos, editarProducto } from '../controllers/ControllerProducto.js';

const routerProducto = express.Router();

routerProducto.post('/', agregarProducto)
routerProducto.get('/:Cedula', mostrarProductos)
routerProducto.get('/:Cedula', mostrarProducto)
routerProducto.delete('/:Cedula', eliminarProducto)
routerProducto.put('/', editarProducto)

export default routerProducto
