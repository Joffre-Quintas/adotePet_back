import { Request, Response } from 'express'
import AddressUsecase from '../usecases/AddressUsecase'
import { TCreateAddressShema, TGetAdressSchema } from '../validations/schema/AddressSchemas'
class AddressController {
    static async findAddress(req: Request, res: Response): Promise<string | undefined> {
        try {
            const { cep, street, number }: TGetAdressSchema = req.body

            const address = await AddressUsecase.findAddress({ cep, street, number })

            return address ? address.id : undefined
        } catch (error: any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }

    static async createAddress(req: Request, res: Response){
        try {
            const {cep, street, city,neighborhood,state,number,complement}: TCreateAddressShema = req.body

            res.status(200).json({message:'Endereço criado com sucesso!'})
        } catch (error:any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }
}



export default AddressController
