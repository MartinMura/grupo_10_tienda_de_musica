module.exports = (sequelize, DataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        address: {
            type: DataTypes.STRING(250),
        },

        avatar: {
            type: DataTypes.STRING(250),
        },

        created_at: {
            type: DataTypes.DATE,
        },

        updated_at: {
            type: DataTypes.DATE,
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