import * as yup from 'yup'
import { cnpjSchema } from '../globalSchemas/globalSchemas'
import { createAddressSchema } from './AddressSchemas'


const updateOngSchema = yup.object({
    cnpj: cnpjSchema,
    fantasyName: yup.string(),
    companyName: yup.string(),
    phone: yup.string().length(11,'O telefone deve ser no formato (xx) xxxxx-xxxx'),
    email: yup.string(),
    urlCompany: yup.string(),
    addressObject: createAddressSchema,
    updatedAt: yup.date()

})

type TUpdateOngSchema =yup.InferType<typeof updateOngSchema>

export {TUpdateOngSchema,updateOngSchema}