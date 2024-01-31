import ResException from '../exceptions/ResExceptions'
import prisma from '../prisma'
import TGetAddress from '../types/TGetAddress'

class AddressUsecase {
    static async findAddress({ cep, street, number }: TGetAddress) {
        const address = await prisma.address.findFirst({
            where: {
                cep,
                street,
                number
            }
        })

        if (!address) throw new ResException(204, 'Endereço não encontrado!')

        return address
    }
}

export default AddressUsecase
