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

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>

export { getAddressSchema, TGetAdressSchema }
