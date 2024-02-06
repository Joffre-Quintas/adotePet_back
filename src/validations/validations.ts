import { NextFunction, Request, Response } from 'express'
import * as yup from 'yup'

const validations = (schema: yup.AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate(req.body)
        next()
    } catch (error: any) {
        res.status(400).json({ message: error.errors[0] })
    }
}

export default validations
