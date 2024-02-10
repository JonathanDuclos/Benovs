import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('benovs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    port: '3306',
    logging: false
});

export default sequelize