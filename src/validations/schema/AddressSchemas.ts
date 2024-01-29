import * as yup from 'yup'

const getAddressSchema = yup.object({
    uuid: yup
        .string()
        .min(36, 'UUID informado é inválido!')
        .max(36, 'UUID informado é inválido!')
        .required('Campo obrigatório!')
})

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>

export { getAddressSchema, TGetAdressSchema }
