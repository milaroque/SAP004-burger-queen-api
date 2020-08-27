'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    active: DataTypes.BOOLEAN,
    table: DataTypes.INTEGER,
    client_name: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.ProductsOrder)
  };
  return Order;
};