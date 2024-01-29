import { Request, Response } from 'express'
import AddressUsecase from '../usecases/AddressUsecase'

class AddressController {
    static async getAddressForUUID(req: Request, res: Response) {
        try {
            const { uuid }: { uuid: string } = req.body

            const address = await AddressUsecase.getAddressForUUID(uuid)

            res.status(200).json(address)
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }
}

export default AddressController
