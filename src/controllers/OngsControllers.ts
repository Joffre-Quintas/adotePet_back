import { Request, Response } from "express";
import OngsUsecase from "../usecases/OngsUsecase";
import { TUpdateOngSchema } from "../validations/schema/OngsSchemas";

class OngsController {
    static async findOng(req:Request, res:Response){

    }

    static async updateOng(req:Request, res:Response){
        try {
            const {cnpj,fantasyName,companyName,phone,email,urlCompany,addressObject}:TUpdateOngSchema = req.body
            
            const ongs = await 

            return
        } catch (error:any) {
            res.status(error.status || 500).json({ message: error.message })
        }
    }
}

export default OngsController