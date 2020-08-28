import database from '../models'

class ProductService {
  static async findByOrderId(orderId) {
    try {
      return await database.ProductsOrder.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }

  static async add(orderId, newProductOrder) {
    try {
      return await database.ProductsOrder.create({...newProductOrder, orderId})
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const productToUpdate = await database.ProductsOrder.findOne({
        where: { id: Number(id) }
      })

      if (productToUpdate) {
        await database.ProductsOrder.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await database.ProductsOrder.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await database.ProductsOrder.findOne({ where: { id: Number(id) } })

      if (productToDelete) {
        const deletedProduct = await database.ProductsOrder.destroy({
          where: { id: Number(id) }
        })
        return deletedProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductService