import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'cursos.sqlite' // nombre de la base de datos
});

// configuración de modelos -> tablas

const Curso = sequelize.define('Curso', {
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

export { Curso } // exportar el modelo(s) que se defina(n)