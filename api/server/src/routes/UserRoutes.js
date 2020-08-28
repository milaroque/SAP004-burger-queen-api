import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()
router.get('/', UserController.getAllUsers)
router.post('/', UserController.addUser)
router.get('/:id', UserController.getUser)
router.put('/:id', UserController.updatedUser)
router.delete('/:id', UserController.deleteUser)

export default router