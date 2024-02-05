import prisma from '../prisma'
import { TCreateAddressShema, TGetAdressSchema } from '../validations/schema/AddressSchemas'

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

    static async createAddress({cep, street, city,neighborhood,state,number,complement}: TCreateAddressShema){

        const address = prisma.address.create({
            data: {
                cep, 
                street, 
                city,
                neighborhood,
                state,
                number,
                complement,
                createdAt: new Date()
            },
          })

          return address
    }
}

export default AddressUsecase
