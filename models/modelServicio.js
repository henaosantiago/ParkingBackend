import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Servicio=dataBase.define('servicio', {
    Codigo_De_Servicio: {type: DataTypes.STRING},
    Numero_De_Factura: {type: DataTypes.STRING},
    Nombre_De_Servicio: {type: DataTypes.STRING},
    Fecha_De_Servicio: {type: DataTypes.DATE},
    Valor_De_Servicio: {type: DataTypes.FLOAT},
    Descripcion: {type: DataTypes.STRING},
})

export default Servicio