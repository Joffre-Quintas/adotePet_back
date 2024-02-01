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

        if (!address) throw new Error('Endereço não encontrado!')

        return address
    }
}

export default AddressUsecase
