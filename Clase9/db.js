import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'Cliente.sqlite'
});

// modelos -> Model = Table

const Clientes = sequelize.define('Cliente', 
    {
    nombre: { // Atributos -> Campos
        type: DataTypes.STRING,

    },
    cuenta: { // Atributos -> Campos
        type: DataTypes.STRING,
    },
    saldo: { // Atributos -> Campos
        type: DataTypes.DECIMAL,
    },
});

async function iniciar() {
    sequelize.sync(); // Sincronizar los modelos a las tablas
}

iniciar();

export {
    sequelize, Clientes
}