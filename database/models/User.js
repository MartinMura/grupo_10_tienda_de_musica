module.exports = (sequelize, DataTypes) => {
    let alias = "Users"
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        
        address: {
            type: DataTypes.STRING(250),
        },

        profile_image: {
            type: DataTypes.STRING(250),
        },

        created_at: {
            type: DataTypes.DATE,
        },

        updated_at: {
            type: DataTypes.DATE(),
        },

        deleted_at: {
            type: DataTypes.DATE,
        }

        
        }

    
    let config = {
        tableName: 'users',
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }


    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsToMany(models.Product, {
            as: "user_product",
            foreignKey: "user_id",
            otherKey: "product_id",
            through: "Cart"
        })
    }

    return User;

}