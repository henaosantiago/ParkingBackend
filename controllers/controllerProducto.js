import Producto from "../models/modelProducto";


const agregarProducto=async(req, res) =>{
    try {
        await Producto.create(req.body);
        res.json({
          message: "Usuario creado correctamente",
        });
      } catch (error) {
        res.send({
          message: `No se pudo registrar el usuario: ${error}`,
        });
      }
    };
const editarProducto=async(req, res) =>{
    try {
        await Producto.update(req.body, {
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
    
const eliminarProducto=async(req, res) =>{
    try {
        await Producto.destroy({
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


const mostrarProducto=async(req, res) =>{

    try {
        const Producto = await Producto.findOne({
          where: { id: req.params.id },
        });
        res.json(Producto);
      } catch (error) {
        res.json({
          message: "No existe el registro en la base de datos",
        });
      }
    };

const mostrarProductos=async(req, res) =>{

    try {
        const Productos = await Productos.findAll();
        res.json(Productos);
      } catch (error) {
        res.json({
          message: "Base de datos vacia",
        });
      }
    


};
export {agregarProducto, editarProducto, eliminarProducto, mostrarProducto, mostrarProductos} 