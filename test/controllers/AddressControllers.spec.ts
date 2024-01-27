import AddressController from '../../src/controllers/AddressControllers'

describe('AddressControllers', () => {
    const reqMock: any = {
        body: {
            uuid: 'aaa'
        }
    }
    const resMock: any = {
        status: jest.fn(() => resMock),
        json: jest.fn(() => resMock)
    }

    it('should return "Endereço não encontrado!"', async () => {
        await AddressController.getAddressForUUID(reqMock, resMock)

        expect(resMock.json).toHaveBeenCalledWith({ message: 'Endereço não encontrado!' })
    })
})
