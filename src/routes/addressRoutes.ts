import { Router } from 'express'
import AddressController from '../controllers/AddressControllers'
import validations from '../validations/validations'
import { getAddressSchema } from '../validations/schema/AddressSchemas'

const addressRoutes = Router()

addressRoutes.get('/address', validations(getAddressSchema), AddressController.findAddress)

export default addressRoutes
