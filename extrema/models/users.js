module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        id: {
            field: "id",
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            field: "username",
            type: Sequelize.STRING
        },
        password: {
            field: "password",
            type: Sequelize.STRING
        },
        email: {
            field: "email",
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Users;
};