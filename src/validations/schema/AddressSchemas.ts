import * as yup from 'yup'

const cepSchema = yup
    .string()
    .matches(/^\d{8}$/, 'CEP deve conter 8 números sem simbolos.')
    .required('Campo CEP obrigatório!')

const getAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required('Campo rua obrigatório!'),
    number: yup.string().required('Campo número obrigatório!')
})

const createAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required('Campo rua obrigatório!'),
    city: yup.string().required('Campo cidade obrigatório!'),
    neighborhood: yup.string().required('Campo bairro obrigatório!'),
    state: yup.string().length(2, 'Campo estado deve conter apenas 2 caracteres').required('Campo estado obrigatório!'),
    number: yup.string().required('Campo número obrigatório!'),
    complement: yup.string().notRequired()

})
 

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>
type TCreateAddressShema = yup.InferType<typeof createAddressSchema>
export { getAddressSchema,createAddressSchema, TGetAdressSchema, TCreateAddressShema }
