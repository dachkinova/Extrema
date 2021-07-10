module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define('reviews', {
        content: {
            field: "content",
            type: Sequelize.STRING
        },
        name: {
            field: "name",
            type: Sequelize.STRING
        },
        email: {
            field: "email",
            type: Sequelize.STRING
        },
        rating: {
            field: "rating",
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    return Review;
};