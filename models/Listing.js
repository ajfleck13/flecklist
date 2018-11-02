module.exports = function (sequelize, DataTypes) {
    var Listing = sequelize.define('Listing', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: "Test Post Pls Ignore"
        },
        body: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            //defaultValue: "My chevy at the levy but the levy is dry"
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 0
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 1
        },
        longitude: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 0
        },
        picture: {
            type: DataTypes.STRING
        }
    });

    // Listing.associate = function (models) {
    //     Listing.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Listing;
};
