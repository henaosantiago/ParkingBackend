import { DataTypes } from "sequelize";
import dataBase from "../database/connectDatabase";

const Producto=dataBase.define('producto', {
    Codigo_De_Producto: {type: DataTypes.STRING},
    Nombre_De_Producto: {type: DataTypes.STRING},
    Numero_De_Factura: {type: DataTypes.STRING},
    Fecha_De_Entrada: {type: DataTypes.DATE},
    Fecha_De_Salida: {type: DataTypes.DATE},
    Seccion: {type: DataTypes.STRING},
    Valor: {type: DataTypes.FLOAT},
    Descripcion: {type: DataTypes.STRING},
    Cantidad: {type: DataTypes.BIGINT},
})

export default Producto