import {Router} from "express"
import Controller from "../controller/controller.js"


const routes= Router()
const controller=new Controller();

routes.get("/", controller.getCalificaciones)
routes.post("/", controller.postCalificaciones)
routes.get("/agrupadas", controller.listarNotasAgrupadas);

export default routes