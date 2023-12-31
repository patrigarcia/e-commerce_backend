"use strict";
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
        "Review",
        {
            id_product: DataTypes.INTEGER,
            id_user: DataTypes.INTEGER,
            qualification: DataTypes.INTEGER,
            comment: DataTypes.STRING,
            imagePath: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {}
    );
    Review.associate = function (models) {
        // associations can be defined here
    };
    return Review;
};
