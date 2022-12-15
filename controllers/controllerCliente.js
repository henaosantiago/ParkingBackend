import Cliente from "../models/modelCliente";

const agregarCliente=async(req, res) =>{
    try {
        await Cliente.create(req.body);
        res.json({
          message: "Usuario creado correctamente",
        });
      } catch (error) {
        res.send({
          message: `No se pudo registrar el usuario: ${error}`,
        });
      }
    };
const editarCliente=async(req, res) =>{
    try {
        await Cliente.update(req.body, {
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
    
const eliminarCliente=async(req, res) =>{
    try {
        await Cliente.destroy({
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




const mostrarCliente=async(req, res) =>{

    try {
        const Cliente= await Producto.findOne({
          where: { id: req.params.id },
        });
        res.json(Cliente);
      } catch (error) {
        res.json({
          message: "No existe el registro en la base de datos",
        });
      }
    };

const mostrarClientes=async(req, res) =>{

    try {
        const Clientes = await Cliente.findAll();
        res.json(Clientes);
      } catch (error) {
        res.json({
          message: "Base de datos vacia",
        });
      }
    


};



export {agregarCliente, editarCliente, eliminarCliente, mostrarCliente, mostrarClientes}