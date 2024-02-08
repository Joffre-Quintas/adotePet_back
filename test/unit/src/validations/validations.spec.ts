import * as yup from 'yup'
import validations from '../../../../src/validations/validations'
import { NextFunction } from 'express'

describe('validations tests', () => {
    const schemaMock = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).max(8).required()
    })

    const reqMock: any = {
        invalid: {
            body: {
                email: 'email@mail.com',
                password: '123456789'
            }
        },
        valid: {
            body: {
                email: 'email@mail.com',
                password: '12345678'
            }
        }
    }

    const resMock: any = {
        status: jest.fn(() => resMock),
        json: jest.fn()
    }

    const nextMock = jest.fn()
    it('should be call next function when is validate', async () => {
        await validations(schemaMock)(reqMock.valid, resMock, nextMock as NextFunction)

        expect(nextMock).toHaveBeenCalled()
    })

    it('should return 400 error when validation fails', async () => {
        await validations(schemaMock)(reqMock.invalid, resMock, jest.fn() as NextFunction)
        expect(resMock.status).toHaveBeenCalledWith(400)
        expect(resMock.json).toHaveBeenCalledWith({ message: 'password must be at most 8 characters' })
    })
})
