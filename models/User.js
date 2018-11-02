module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        picture: {
            type: DataTypes.STRING,
        },
        about: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
        }
    });

    // User.associate = function (models) {
    //     User.hasMany(models.Listing, {
    //         onDelete: 'cascade'
    //     });
    // };

    return User;
};
