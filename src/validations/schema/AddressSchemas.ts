import * as yup from 'yup'

function errorMessageFieldRequired(nome:string){
    return `Campo ${nome} obrigatório`
}

const cepSchema = yup
    .string()
    .matches(/^\d{8}$/, 'CEP deve conter 8 números sem simbolos.')
    .required(errorMessageFieldRequired('CEP'))

const getAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required(errorMessageFieldRequired('rua')),
    number: yup.string().required(errorMessageFieldRequired('número'))
})

const createAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required(errorMessageFieldRequired('rua')),
    city: yup.string().required(errorMessageFieldRequired('cidade')),
    neighborhood: yup.string().required(errorMessageFieldRequired('bairro')),
    state: yup.string().length(2, 'Campo estado deve conter apenas 2 caracteres').required(errorMessageFieldRequired('estado')),
    number: yup.string().required(errorMessageFieldRequired('número')),
    complement: yup.string().notRequired()

})
 

type TGetAdressSchema = yup.InferType<typeof getAddressSchema>
type TCreateAddressShema = yup.InferType<typeof createAddressSchema>
export { getAddressSchema,createAddressSchema, TGetAdressSchema, TCreateAddressShema }
