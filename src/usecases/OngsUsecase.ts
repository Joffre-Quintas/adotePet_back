import prisma from "../prisma";
import { TCreateAddressShema, TGetAdressSchema } from "../validations/schema/AddressSchemas";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";

class OngsUsecase {

    static async findAddress({ cep, street, number }: TGetAdressSchema) {
        const address = await prisma.address.findFirst({
            where: {
                cep,
                street,
                number
            }
        })

    }

    static async createAddress({cep, street, city,neighborhood,state,number,complement}: TCreateAddressShema){

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

          return address
    }
    
    
    
    static async updateOng ({fantasyName,companyName,phone,email,urlCompany,addressId,updatedAt}:TUpdateOngSchema){
        
        if (!this.findAddress()){
            return this.createAddress
        }else{
            const updateOng = await prisma.ong.update({
                where:{
                    fantasyName,
                    companyName,
                    phone,
                    email,
                    urlCompany,
                    addressId: this.findAddress(),
                    updatedAt: new Date()
                }
            })
        }
        

    }



}

export default OngsUsecase