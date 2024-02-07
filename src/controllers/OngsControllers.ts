import { Request, Response } from "express";
import OngsUsecase from "../usecases/OngsUsecase";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";

class OngsController {
    static async findOng(req:Request, res:Response){

    }

    static async updateOng(req:Request, res:Response){
        try {
            const {fantasyName,companyName,phone,email,urlCompany,addressId,updatedAt}:TUpdateOngSchema = req.body
            
            const ongs = await OngsUsecase

            return
        } catch (error:any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }
}

export default OngsController