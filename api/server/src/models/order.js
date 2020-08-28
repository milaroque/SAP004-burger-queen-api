'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    table: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    items: DataTypes.VIRTUAL
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.ProductsOrder, {
      foreignKey: 'orderId'
    })
  };
  return Order;
};