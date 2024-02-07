import prisma from "../prisma";
import { TCreateAddressShema, TGetAdressSchema } from "../validations/schema/AddressSchemas";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";

class OngsUsecase {

    static async findAddress({cep, street, city,neighborhood,state,number,complement}: TCreateAddressShema) {
        const address = await prisma.address.findFirst({
            where: {
                cep,
                street,
                number
            }
        })

        if (address) {
            return address.id
        }else{
            const address = prisma.address.create({
                data: {
                    cep, 
                    street, 
                    city,
                    neighborhood,
                    state: state.toUpperCase(),
                    number,
                    complement,
                    createdAt: new Date()
                },
            })
            return (await address).id
        }
    }  
    
    static async updateOng ({fantasyName,companyName,phone,email,urlCompany,addressId,updatedAt}:TUpdateOngSchema){
        

            const updateOng = await prisma.ong.update({
                where:{
                    fantasyName,
                    companyName,
                    phone,
                    email,
                    urlCompany,
                    addressId,
                    updatedAt: new Date()
                }
            })
        
            return updateOng
        

    }



}

export default OngsUsecase