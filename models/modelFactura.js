import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Factura=dataBase.define('factura', {
    Numero_De_Factura: {type: DataTypes.STRING},
    Cedula: {type: DataTypes.STRING},
    Fecha_De_Factura: {type: DataTypes.DATE},
})

export default Factura