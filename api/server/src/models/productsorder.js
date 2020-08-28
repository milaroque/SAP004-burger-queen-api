'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrder = sequelize.define('ProductsOrder', {
    add_extra: DataTypes.STRING,
    add_type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, {});
  ProductsOrder.associate = function(models) {
    ProductsOrder.belongsTo(models.Product, {
      foreignKey: 'productId'
    })
    ProductsOrder.belongsTo(models.Order, {
      foreignKey: 'orderId'
    })
  };
  return ProductsOrder;
};