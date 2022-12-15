import { Sequelize } from "sequelize";

const dataBase= new Sequelize('parking_app', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
export default dataBase