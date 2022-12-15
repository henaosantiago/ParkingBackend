import Factura from "../models/modelFactura";


const agregarFactura=async(req, res) =>{
    try {
        await Factura.create(req.body);
        res.json({
          message: "Usuario creado correctamente",
        });
      } catch (error) {
        res.send({
          message: `No se pudo registrar el usuario: ${error}`,
        });
      }
    };
const editarFactura=async(req, res) =>{
    try {
        await Factura.update(req.body, {
          where: { id: req.params.id },
        });
        res.json({
          message: "Registro Actualizado correctamente",
        });
      } catch (error) {
        res.json({
          message: error.message,
        });
      }
    };
    
const eliminarFactura=async(req, res) =>{
    try {
        await Factura.destroy({
          where: { id: req.params.id },
        });
        res.json({
          message: "Resgistro eliminado correctamente",
        });
      } catch (error) {
        res.json({
          message: error.message,
        });
      }
    }




const mostrarFactura=async(req, res) =>{

    try {
        const Factura = await Producto.findOne({
          where: { id: req.params.id },
        });
        res.json(Factura);
      } catch (error) {
        res.json({
          message: "No existe el registro en la base de datos",
        });
      }
    };

const mostrarFacturas=async(req, res) =>{

    try {
        const Facturas = await Factura.findAll();
        res.json(Facturas);
      } catch (error) {
        res.json({
          message: "Base de datos vacia",
        });
      }
    


};

export {agregarFactura, editarFactura, eliminarFactura, mostrarFactura, mostrarFacturas}