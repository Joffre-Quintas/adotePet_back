import AddressController from '../../../../src/controllers/AddressControllers'

describe('AddressControllers findAddress', () => {
    const reqMock: any = {
        body: {
            cep: '11111111',
            street: 'av qualquer coisa',
            number: '10'
        }
    }
    const resMock: any = {
        status: jest.fn(() => resMock),
        json: jest.fn()
    }

    it('should return undefined', async () => {
        const spy = jest.spyOn(AddressController, 'findAddress')

        const result = await AddressController.findAddress(reqMock, resMock)

        expect(spy).toHaveBeenCalledTimes(1)
        expect(result).toBeUndefined()
    })
    it('should return typeof value string', async () => {
        jest.spyOn(AddressController, 'findAddress').mockResolvedValue('id')

        const result = await AddressController.findAddress(reqMock, resMock)

        expect(typeof result).toBe('string')
    })
})

describe('AddressController createAddress', () => {
    const reqMock: any = {
        body: {
            cep: '12345678',
            street: 'qualquer rua',
            city: 'qualquer cidade',
            neighborhood: 'qualquer bairro',
            state: 'qq',
            number: 'a',
            complement: null
        }
    }
    const resMock: any = {
        status: jest.fn(() => resMock),
        json: jest.fn()
    }
    it('should be return status 200 and messsage: Endereço criado com sucesso! when addres is create.', async () => {
        jest.spyOn(AddressController, 'createAddress').mockImplementationOnce(async (req, res) => {
            res.status(200).json({ message: 'Endereço criado com sucesso!' })
        })
        AddressController.createAddress(reqMock, resMock)

        await AddressController.createAddress(reqMock, resMock)

        expect(resMock.status).toHaveBeenCalledWith(200)
        expect(resMock.json).toHaveBeenCalledWith({ message: 'Endereço criado com sucesso!' })
    })
})
