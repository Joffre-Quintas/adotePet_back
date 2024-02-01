import ResException from '../exceptions/ResExceptions'
import prisma from '../prisma'
import TGetAddress from '../types/TGetAddress'

class AddressUsecase {
    static async findAddress({ cep, street, number }: TGetAddress):Promise<string|undefined> {
        const address = await prisma.address.findFirst({
            where: {
                cep,
                street,
                number
            }
        })

        return address?.id
    }
    
}

export default AddressUsecase
