import * as yup from 'yup'

const cepSchema = yup
    .string()
    .matches(/^\d{8}$/, 'CEP deve conter 8 números sem simbolos.')
    .required('Campo obrigatório!')

const getAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required('Campo obrigatório!'),
    number: yup.string().required('Campo obrigatório!')
})

const createAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required('Campo obrigatório!'),
    city: yup.string().required('Campo obrigatório!'),
    neighborhood: yup.string().required('Campo obrigatório!'),
    state: yup.string().length(2, 'Campo "Estado" deve conter apenas 2 caracteres').required('Campo obrigatório!'),
    number: yup.string().required('Campo obrigatório!'),
    complement: yup.string().notRequired()

})
 

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>
type TCreateAddressShema = yup.InferType<typeof createAddressSchema>
export { getAddressSchema,createAddressSchema, TGetAdressSchema, TCreateAddressShema }
