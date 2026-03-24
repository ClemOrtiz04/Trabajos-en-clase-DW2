import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'notificaciones.sqlite'
})

const Notificacion = sequelize.define('Notificacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, //clave primaria de la tabla
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.STRING,
    },
    mensaje: {
        type: DataTypes.STRING,
    },
    usuario: {
        type: DataTypes.STRING,
    }
})

async function init () {
    sequelize.sync();
}

init()

export { Notificacion }