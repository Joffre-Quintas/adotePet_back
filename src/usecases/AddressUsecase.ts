import prisma from '../prisma'

class AddressUsecase {
    static async getAddressForUUID(uuid: string) {
        const address = await prisma.address.findFirst({
            where: {
                id: uuid
            }
        })

        if (!address) throw new Error('Endereço não encontrado!')

        return address
    }
}

export default AddressUsecase
