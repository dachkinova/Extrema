module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
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
        }, 
        role: {
            field: "role",
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return User;
};