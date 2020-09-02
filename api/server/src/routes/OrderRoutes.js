import { Router } from 'express'
import OrderController from '../controllers/OrdersController'

const router = Router()
router.get('/', OrderController.all)
router.post('/', OrderController.add)
router.get('/:id', OrderController.getOrder)
router.put('/:id', OrderController.updatedOrder)
router.delete('/:id', OrderController.deleteOrder)
router.get('/:id/items', OrderController.getItemsById)
router.post('/:id/items', OrderController.createItem)

export default router