import prisma from "../prisma";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";
import AddressUsecase from "./AddressUsecase";

class OngsUsecase {
    
    static async ongUpdate (data:TUpdateOngSchema){
        if (data.addressObject.cep && data.addressObject.street && data.addressObject.number) {
           const address = await prisma.address.findFirst({
            where:{
                cep:data.addressObject.cep,
                street: data.addressObject.street,
                number: data.addressObject.number
            }
           })
           if (!address) {
            const address = prisma.address.create({
                data: { 
                    cep:data.addressObject.cep, 
                    street:data.addressObject.street, 
                    city:data.addressObject.city,
                    neighborhood:data.addressObject.neighborhood,
                    state:data.addressObject.state.toUpperCase(),
                    number:data.addressObject.number,
                    complement:data.addressObject.complement,
                    createdAt: new Date()
                },
              })
              return (await address).id
           }
        }
        else{
             prisma.ong.update({
                where:{
                    id: data.id,
                } ,
                data

             })
        }
    }
}

export default OngsUsecase
