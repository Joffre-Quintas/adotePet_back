import { Router } from "express";
import OngsController from "../controllers/OngsControllers";

const ongsRoutes = Router()

ongsRoutes.get('/ongs')
ongsRoutes.put('/ongs', OngsController.updateOng)

export default ongsRoutes