import express from 'express'
import { agregarFactura, eliminarFactura, mostrarFactura, mostrarFacturas, editarFactura } from '../controllers/ControllerProducto.js';

const routerFactura = express.Router();

routerFactura.post('/', agregarFactura)
routerFactura.get('/:Cedula', mostrarFactura)
routerFactura.get('/:Cedula', mostrarFacturas)
routerFactura.delete('/:Cedula', eliminarFactura)
routerFactura.put('/', editarFactura)

export default routerFactura