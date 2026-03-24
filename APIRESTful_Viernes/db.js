import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'cliente.sqlite' // nombre de la base de datos
});

// configuración de modelos -> tablas

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    domicilio: {
        type: DataTypes.STRING
    },
    saldo: {
        type: DataTypes.DECIMAL
    }
})

async function init() {
sequelize.sync();
}

init();

export { Cliente } // exportar el modelo(s) que se defina(n)