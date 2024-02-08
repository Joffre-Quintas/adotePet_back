import AddressUsecase from '../../../../src/usecases/AddressUsecase'

describe('AddressUsecase findAddress', () => {
    const paramsMock = {
        cep: '11111111',
        street: 'rua qualquer',
        number: '1A'
    }
    it('should be return complet info of Address', async () => {
        jest.spyOn(AddressUsecase, 'findAddress').mockResolvedValue({
            id: '1',
            cep: '11111111',
            street: 'rua qualquer',
            city: 'cidade qualquer',
            neighborhood: 'bairro qualquer',
            state: 'QQ',
            number: '1A',
            complement: null,
            createdAt: new Date(),
            updatedAt: null
        })

        const actual = await AddressUsecase.findAddress(paramsMock)

        expect(actual).toHaveProperty('id')
    })
    it('should be return address with same values then req', async () => {
        jest.spyOn(AddressUsecase, 'findAddress').mockResolvedValue({
            id: '1',
            cep: '11111111',
            street: 'rua qualquer',
            city: 'cidade qualquer',
            neighborhood: 'bairro qualquer',
            state: 'QQ',
            number: '1A',
            complement: null,
            createdAt: new Date(),
            updatedAt: null
        })

        const actual = await AddressUsecase.findAddress(paramsMock)

        expect(actual?.cep).toBe(paramsMock.cep)
        expect(actual?.street).toBe(paramsMock.street)
        expect(actual?.number).toBe(paramsMock.number)
    })
    it('should be return null whe dont find Address', async () => {
        jest.spyOn(AddressUsecase, 'findAddress').mockResolvedValue(null)

        const actual = await AddressUsecase.findAddress(paramsMock)

        expect(actual).toBeNull()
    })
})
