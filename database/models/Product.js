module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        product_name: {
            type: DataTypes.STRING(100)
        },

        product_description: {
            type: DataTypes.STRING(600)
        },
        
        price: {
            type: DataTypes.INTEGER(11)
        },

        product_image: {
            type: DataTypes.STRING(250)
        },

        stock: {
            type: DataTypes.INTEGER(11)
        },

        category: {
            type: DataTypes.STRING(50)
        },

        /* color: {
            type: DataTypes.STRING(100)
        }, */

        created_at: {
            type: DataTypes.DATE,
        },

        updated_at: {
            type: DataTypes.DATE,
        },

        deleted_at: {
            type: DataTypes.DATE,
        },

    };
    let config = {
        tableName: 'products',
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.belongsToMany(models.Users, {
            as: "product_cart",
            foreignKey: "product_id",
            otherKey: "user_id",
            through: "Cart"
        })
    }

    return Product;
}