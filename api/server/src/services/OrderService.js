import database from '../models'
import ProductsOrderService from './ProductsOrderService'

class OrderService {
  static async all() {
    try {
      const orders = await database.Order.findAll()
      const newOrders = await Promise.all( orders.map( async order => {
        order.items = await ProductsOrderService.findByOrderId(order.id)
        return order
      }))
      return newOrders
    } catch (error) {
      throw error
    }
  }
  static async getById(id) {
    try {
      return await database.Order.findOne({
        where: { id: Number(id)}
      })
    } catch (error) {
      throw error
    }
  }

  static async add(newOrder) {
    try {
      return await database.Order.create(newOrder)
    } catch (error) {
      throw error
    }
  }

  static async updateOrder(id, updateOrder) {
    try {
      const orderToUpdate = await database.Order.findOne({
        where: { id: Number(id) }
      })

      if (orderToUpdate) {
        await database.Order.update(updateOrder, { where: { id: Number(id) } })

        return updateOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrder(id) {
    try {
      const theOrder = await database.Order.findOne({
        where: { id: Number(id) }
      })

      return theOrder
    } catch (error) {
      throw error
    }
  }

  static async deleteOrder(id) {
    try {
      const orderToDelete = await database.Order.findOne({ where: { id: Number(id) } })

      if (orderToDelete) {
        const deletedOrder = await database.Order.destroy({
          where: { id: Number(id) }
        })
        return deletedOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default OrderService