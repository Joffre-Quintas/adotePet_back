import ResException from '../exceptions/ResExceptions'
import prisma from '../prisma'
import { TGetAdressSchema } from '../validations/schema/AddressSchemas'

class AddressUsecase {
    static async findAddress({ cep, street, number }: TGetAdressSchema) {
        const address = await prisma.address.findFirst({
            where: {
                cep,
                street,
                number
            }
        })

        return address
    }
}

export default AddressUsecase
