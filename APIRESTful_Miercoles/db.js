import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'articulo.sqlite' // nombre de la base de datos
});

// configuración de modelos -> tablas

const Articulo = sequelize.define('Articulo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.DECIMAL
    },
    precio: {
        type: DataTypes.DECIMAL
    }
})

async function init() {
sequelize.sync();
}

init();

export { Articulo } // exportar el modelo(s) que se defina(n)