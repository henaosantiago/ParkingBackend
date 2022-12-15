import Servicio from "../models/modelServicio";

const agregarServicio=async(req, res) =>{
    try {
        await Servicio.create(req.body);
        res.json({
          message: "Usuario creado correctamente",
        });
      } catch (error) {
        res.send({
          message: `No se pudo registrar el usuario: ${error}`,
        });
      }
    };
const editarServicio=async(req, res) =>{
    try {
        await Servicio.update(req.body, {
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
    
const eliminarSevicio=async(req, res) =>{
    try {
        await Servicio.destroy({
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




const mostrarServicio=async(req, res) =>{

    try {
        const Servicio= await Servicio.findOne({
          where: { id: req.params.id },
        });
        res.json(Servicio);
      } catch (error) {
        res.json({
          message: "No existe el registro en la base de datos",
        });
      }
    };

const mostrarServicios=async(req, res) =>{

    try {
        const Servicios = await Servicios.findAll();
        res.json(Servicios);
      } catch (error) {
        res.json({
          message: "Base de datos vacia",
        });
      }
    


};



export {agregarServicio, editarServicio, eliminarSevicio, mostrarServicio, mostrarServicios}