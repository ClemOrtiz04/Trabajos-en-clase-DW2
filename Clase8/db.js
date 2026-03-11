import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({ // Conexion a la base de datos
  dialect: 'sqlite', //Tipo de base de datos a utilizar
  storage: 'ejemplo.sqlite' // Ubicacion del archivo de la bd
});

const Usuario = sequelize.define('Usuario', // Modelo -> Tabla
    {
        nombre: { //Atributo -> Campo
            type: DataTypes.STRING,
        },
        correo: { //Atributo -> Campo
            type: DataTypes.STRING
        },
    },
);

async function iniciar() {
    sequelize.sync(); // Sincronizar los modelos con las tablas
}

iniciar();