import prisma from "../prisma";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";

class OngsUsecase {

    static async ongFindAddress({ addressObject}: TUpdateOngSchema) {
        const address = await prisma.address.findFirst({
            where: {
                cep:addressObject?.cep,
                street:addressObject?.street,
                number:addressObject?.number
            }
        })

        return address?.id
    }

    static async ongCreateAddress({addressObject}: TUpdateOngSchema){

        const address = prisma.address.create({
            data: {
                cep: addressObject?.cep, 
                street: addressObject?.street, 
                city: addressObject?.city,
                neighborhood: addressObject?.neighborhood,
                state: addressObject?.state.toUpperCase(),
                number: addressObject?.number,
                complement: addressObject?.complement,
                updatedAt: new Date()
            },
          })

          return (await address).id



    }
}
