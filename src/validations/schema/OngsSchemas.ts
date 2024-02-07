import * as yup from 'yup'

function errorMessageFieldRequired(nome:string){
    return `Campo ${nome} obrigatório`
}


const updateOngSchema = yup.object({
    fantasyName: yup.string().required(errorMessageFieldRequired('nome fantasia')),
    companyName: yup.string().required(errorMessageFieldRequired('npme da compania')),
    phone: yup.string().length(11,'Campo telefone deve ser inserido o DDD antes de colocar o número do seu telefone').required(errorMessageFieldRequired('telefone')),
    email: yup.string().required(errorMessageFieldRequired('email')),
    urlCompany: yup.string(),
    addressId: yup.string().required(errorMessageFieldRequired('Endereço ID')),
    updatedAt: yup.date().required()

})

type TUpdateOngSchema =yup.InferType<typeof updateOngSchema>

export {TUpdateOngSchema,updateOngSchema}