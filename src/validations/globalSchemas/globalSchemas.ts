import * as yup from 'yup'

function errorMessageFieldRequired(nome:string){
    return `Campo ${nome} obrigatório`
}

const cepSchema = yup
    .string()
    .matches(/^\d{8}$/, 'CEP deve conter 8 números sem simbolos.')
    .required(errorMessageFieldRequired('CEP'))


const cnpjSchema = yup
.string()
.matches(/^\d{14}$/, 'CNPJ deve conter 14 números sem simbolos.')
.required(errorMessageFieldRequired('CEP'))

const createAddressSchema = yup.object({
    cep: cepSchema,
    street: yup.string().required(errorMessageFieldRequired('rua')),
    city: yup.string().required(errorMessageFieldRequired('cidade')),
    neighborhood: yup.string().required(errorMessageFieldRequired('bairro')),
    state: yup.string().length(2, 'Campo estado deve conter apenas 2 caracteres').required(errorMessageFieldRequired('estado')),
    number: yup.string().required(errorMessageFieldRequired('número')),
    complement: yup.string().notRequired()

})

export {cepSchema,cnpjSchema,createAddressSchema}


