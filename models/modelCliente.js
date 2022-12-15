import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Cliente=dataBase.define('cliente', {
    Cedula: {type: DataTypes.STRING},
    Nombre: {type: DataTypes.STRING},
    Apellido: {type: DataTypes.STRING},
    Fecha_De_Nacimiento: {type: DataTypes.DATE},
    Sexo: {type: DataTypes.CHAR},
    Direccion: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.STRING},
})

export default Cliente