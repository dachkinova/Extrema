module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('orders', {
        user_id: {
            field: "user_id",
            type: Sequelize.INTEGER
        },
        product_name: {
            field: "product_name",
            type: Sequelize.STRING
        },
        quantity: {
            field: "quantity",
            type: Sequelize.STRING
        },
        email: {
            field: "email",
            type: Sequelize.STRING
        },
        address: {
            field: "address",
            type: Sequelize.STRING
        },
        city: {
            field: "city",
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Order;
};