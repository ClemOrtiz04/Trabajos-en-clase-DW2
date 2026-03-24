import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'venta.sqlite' // nombre de la base de datos
});

// configuración de modelos -> tablas

const Venta = sequelize.define('Venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.STRING
    },
    cliente: {
        type: DataTypes.STRING
    },
    subtotal: {
        type: DataTypes.DECIMAL
    },
    iva: {
        type: DataTypes.DECIMAL
    },
    total: {
        type: DataTypes.DECIMAL
    }
})

async function init() {
sequelize.sync();
}

init();

export { Venta } // exportar el modelo(s) que se defina(n)