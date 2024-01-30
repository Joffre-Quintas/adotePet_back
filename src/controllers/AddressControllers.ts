import { Request, Response } from 'express'
import AddressUsecase from '../usecases/AddressUsecase'
import TGetAddress from '../types/TGetAddress'

class AddressController {
    static async findAddress(req: Request, res: Response) {
        try {
            const { cep, street, number }: TGetAddress = req.body

            const address = await AddressUsecase.findAddress({ cep, street, number })

            res.status(200).json(address)
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }
}

export default AddressController
