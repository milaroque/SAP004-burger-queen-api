import OrderService from '../services/OrderService'
import ProductsOrderService from '../services/ProductsOrderService'
import Util from './util'

const util = new Util()

class OrderController {
  static async all(req, res) {
    const orders = await OrderService.all()
    if (orders.length > 0) {
      util.setSuccess(200, 'Orders retrieved', orders)
    }else {
      util.setSuccess(200, 'No Order found')
    }
    return util.send(res)
  }

  static async getOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrder = await OrderService.getOrder(id)

      if (!theOrder) {
        util.setError(404, `Cannot find Order with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Order', theOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }
    static async getItemsById(req, res) {
      const { id } = req.params
      const items = await ProductsOrderService.findByOrderId(id, req.body)
      util.setSuccess(200, 'Order retrieved', items)
      return util.send(res)
    }
  
    static async createItem(req,res){
      const { id } = req.params
      const item = await ProductsOrderService.add(id, req.body)
      util.setSuccess(200, 'Order retrieved', item)
      return util.send(res)
    }


  static async add(req, res) {
    if (!req.body.client_name || !req.body.table) {
      util.setError(400, 'Please complete details')
      return util.send(res)
    }
    const newOrder = req.body
    try {
      const createdOrder = await OrderService.add(newOrder)
      util.setSuccess(201, 'Order Added!', createdOrder)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }
  static async allItems(req, res) {
    return []
  }

  static async updatedOrder(req, res) {
    const alteredOrder = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrder = await OrderService.updateOrder(id, alteredOrder)
      if (!updateOrder) {
        util.setError(404, `Cannot find Order with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Order updated', updateOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(id)

      if (orderToDelete) {
        util.setSuccess(200, 'Order deleted')
      } else {
        util.setError(404, `Order with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default OrderController