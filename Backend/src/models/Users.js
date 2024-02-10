import { DataTypes } from 'sequelize'
import sequelize from '../sequelize/sequelize'

//Users model
const Users = sequelize.define('Users', {
    id : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "benovs user"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "benovs user password",
    }
},{
    paranoid: true
});

export default Users;