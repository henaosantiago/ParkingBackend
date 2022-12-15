import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Vehiculo=dataBase.define('vehiculo', {
    Placa_Vehiculo: {type: DataTypes.STRING},
    Cedula: {type: DataTypes.STRING},
    Tipo_De_Vehiculo: {type: DataTypes.STRING},
    Hora_De_Ingreso: {type: DataTypes.TIME},
    Fecha_De_Ingreso: {type: DataTypes.DATE},
    Hora_De_Salida: {type: DataTypes.TIME},
    Fecha_De_Salida: {type: DataTypes.DATE},
})

export default Vehiculo