module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        category_name: {
            type: DataTypes.STRING
        }

    };
    let config = {
        tableName: 'categories',
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "product",
            foreignKey: "category_id"
        })
    }

    return Category;
}