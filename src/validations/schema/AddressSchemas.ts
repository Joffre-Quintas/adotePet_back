import * as yup from 'yup'
import dinamicMessage from '../../utils/utils'


const cepSchema = yup
    .string()
    .matches(/^\d{8}$/, 'CEP deve conter 8 números sem simbolos.')
    .required(dinamicMessage('CEP'))

const getAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required(dinamicMessage('rua')),
    number: yup.string().required(dinamicMessage('número'))
})

const createAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required(dinamicMessage('rua')),
    city: yup.string().required(dinamicMessage('cidade')),
    neighborhood: yup.string().required(dinamicMessage('bairro')),
    state: yup.string().length(2, 'Campo estado deve conter apenas 2 caracteres').required(dinamicMessage('estado')),
    number: yup.string().required(dinamicMessage('número')),
    complement: yup.string().notRequired()

})
 

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>
type TCreateAddressShema = yup.InferType<typeof createAddressSchema>
export { getAddressSchema,createAddressSchema, TGetAdressSchema, TCreateAddressShema }
