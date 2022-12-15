import Vehiculo from "../models/modelVehiculo.js";

const agregarVehiculo=async(req, res) =>{
    try {
        await Vehiculo.create(req.body);
        res.json({
          message: "Usuario creado correctamente",
        });
      } catch (error) {
        res.send({
          message: `No se pudo registrar el usuario: ${error}`,
        });
      }
    };
const editarVehiculo=async(req, res) =>{
    try {
        await Vehiculo.update(req.body, {
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
    
const eliminarVehiculo=async(req, res) =>{
    try {
        await Vehiculo.destroy({
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




const mostrarVehiculo=async(req, res) =>{

    try {
        const Vehiculo= await Vehiculo.findOne({
          where: { id: req.params.id },
        });
        res.json(Vehiculo);
      } catch (error) {
        res.json({
          message: "No existe el registro en la base de datos",
        });
      }
    };

const mostrarVehiculos=async(req, res) =>{

    try {
        const Vehiculos = await Vehiculos.findAll();
        res.json(Vehiculos);
      } catch (error) {
        res.json({
          message: "Base de datos vacia",
        });
      }
    


};



export {agregarVehiculo, editarVehiculo, eliminarVehiculo, mostrarVehiculo, mostrarVehiculos}