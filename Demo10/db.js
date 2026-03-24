import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize ( {
    dialect: 'sqlite',
    storage: 'usuarios.sqlite'
});

const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    domicilio: DataTypes.STRING
});

async function init() {
    sequelize.sync();
}

init();

export { Usuario };