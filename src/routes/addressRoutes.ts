import { Router } from 'express'
import AddressController from '../controllers/AddressControllers'
import validations from '../validations/validations'
import { createAddressSchema, getAddressSchema } from '../validations/schema/AddressSchemas'

const addressRoutes = Router()

addressRoutes.get('/address', validations(getAddressSchema), AddressController.findAddress)
addressRoutes.post('/address',validations(createAddressSchema),AddressController.createAddress)

export default addressRoutes
