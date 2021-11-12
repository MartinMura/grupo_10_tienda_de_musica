module.exports = (sequelize, DataTypes) => {
    let alias = 'Cart'

    let cols = {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER(11),
    },

    product_id: {
        type: DataTypes.INTEGER(11),
    },

    quantity: {
        type: DataTypes.INTEGER(11),
    },

    cart_date:{
        type: DataTypes.DATE
    },
    
    created_at: {
        type: DataTypes.DATE,
    },

    updated_at: {
        type: DataTypes.DATE,
    },

    deleted_at: {
        type: DataTypes.DATE,
    },
}

    let config = {
    tableName: 'carts',
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true
    }
    
    const Cart = sequelize.define(alias, cols, config)

    

    return Cart;
} 