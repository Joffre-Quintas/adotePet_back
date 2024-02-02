import AddressController from '../../src/controllers/AddressControllers'

describe('AddressControllers', () => {
    const reqMock: any = {
        body: {
            cep: '11111111',
            street: 'av qualquer coisa',
            number: '10'
        }
    }
    const resMock: any = {
        status: jest.fn(() => resMock),
        json: jest.fn(() => resMock)
    }

    it('should return "Endereço não encontrado!" and status 204', async () => {
        await AddressController.findAddress(reqMock, resMock)

        expect(resMock.status).toHaveBeenCalledWith(500)
    })
})
